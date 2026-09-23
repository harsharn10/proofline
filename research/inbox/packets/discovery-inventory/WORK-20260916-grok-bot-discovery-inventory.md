---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260916-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 2f7f2c482ba49fe2477cebc7a42c798a689e4c7a
slug: discovery-inventory
name: Discovery inventory 2026-09-16
packet_tier: seed
as_of: 2026-09-16T13:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260916-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-16
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census pons is ponsfamily.com / @ponsdotfamily. Sluice is sluice.live / @sluice_rh. The SLUICE token address is not on the pons census row."
        - "Token creator is PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 and creation tx is launchAndBuy on PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948. Independent pad launches remain separate identities; this is launch infrastructure, not a merge."
    - slug: arrow
      signals: [other]
      contrary_signals:
        - "Arrow is already census slug arrow / @ArrowFinanceio. This inventory does not propose a second Arrow identity. Llama slug arrowpad twitter RobinArrowPad and slug arrowpad.fun twitter Arrowpadfun are not @ArrowFinanceio."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-16. Suggested gap Sluice / @sluice_rh / sluice.live is not a census row and is not in open #163 (arcus), #164 (canopy), or #165 (twofold). Site and handle name each other; bio CA 0xb48d34dd8b53324cb8525461c8e548522db885ec was reproduced on chain 4663 (name Sluice / SLUICE, 3248 B). Blockscout verified name is PonsV2LauncherToken (CON-1). Not collapsed to census pons: different handle and domain; independent pad launches stay separate. Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Sluice claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://sluice.live/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/sluice_rh", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xb48d34dd8b53324cb8525461c8e548522db885ec", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/tx/0xc2d8b438e61657e41bc6389ab744d334359c72d3eaad147fe582c49c1f622926", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x10cb519f09f4bc8fc92a653498ee9b6bb279a24286d55b56cdd38a48ed92b90b", authenticity: confirmed }
  - { kind: other, url: "https://api.coingecko.com/api/v3/coins/sluice", authenticity: confirmed }
  - { kind: other, url: "https://api.llama.fi/protocol/sluice", authenticity: confirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad/0xb48d34dd8b53324cb8525461c8e548522db885ec", authenticity: confirmed }
  - { kind: other, url: "https://app.arrowfinance.io/docs", authenticity: confirmed }

deployments:
  - label: SLUICE token (RPC name Sluice, symbol SLUICE; Blockscout verified name PonsV2LauncherToken)
    role: token
    address:
      value: "0xb48d34dd8b53324cb8525461c8e548522db885ec"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-16
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]

metrics:
  - { kind: market_cap, value: 35543, currency: USD, as_of: 2026-09-16T13:32:40Z, window: point, method: "api.coingecko.com/api/v3/coins/sluice market_data.market_cap.usd; platforms.robinhood 0xb48d34dd8b53324cb8525461c8e548522db885ec", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 12720.61, currency: USD, as_of: 2026-09-16T13:35:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xb48d34dd8b53324cb8525461c8e548522db885ec Uniswap v4 SLUICE/ETH pair 0x10cb519f…2b90b volume.h24; pair-level, not summed across other SLUICE/ETH or SLUICE/USDG rows", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 956, currency: null, as_of: 2026-09-16T13:34:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0xb48d34dd8b53324cb8525461c8e548522db885ec token.holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-2], result: "sluice.live title Sluice; @sluice_rh website field https://sluice.live/ and bio publishes CA 0xb48d34dd8b53324cb8525461c8e548522db885ec. CoinGecko coins/sluice homepage https://sluice.live twitter_screen_name sluice_rh platforms.robinhood the same address. DexScreener info.websites https://sluice.live/ info.socials https://x.com/sluice_rh." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-16T13:36:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3d8edbb (64548283). 0xb48d34dd8b53324cb8525461c8e548522db885ec code 3248 B name() Sluice symbol() SLUICE decimals() 18 totalSupply() 1e27 owner() reverted. Creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 code 20906 B. Later same RPC at block 64549354: Arrow docs Launchpad 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe code 16420 B; ReferralRouter 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb code 4611 B." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-16T13:38:00Z, receipt_ids: [R-4, R-9, R-10], result: "Blockscout api/v2 0xb48d34DD8B53324CB8525461c8E548522db885Ec is_contract true is_verified true name PonsV2LauncherToken token Sluice/SLUICE holders_count 956 creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (name PonsV2LaunchDeployer) creation_transaction_hash 0xc2d8b438e61657e41bc6389ab744d334359c72d3eaad147fe582c49c1f622926. Tx timestamp 2026-08-28T09:00:57Z method launchAndBuy to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 from EOA 0x65c0F179829BeDC255Fdee81A94dA2A5B624F504. Smart-contract name PonsV2LauncherToken constructor name_ Sluice symbol_ SLUICE." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-16T13:36:00Z, receipt_ids: [R-6, R-7, R-8], result: "CoinGecko id sluice platforms.robinhood 0xb48d34dd8b53324cb8525461c8e548522db885ec preview_listing false market_cap.usd 35543 total_volume.usd 10023.68 last_updated 2026-09-16T13:32:40Z. DexScreener chainId robinhood Uniswap v4 SLUICE/ETH volume.h24 12720.61 liquidity.usd 17153.2. Llama GET /protocol/sluice returned Protocol not found." }
  - { id: REP-5, method: document-scope, chain_id: 4663, checked_at: 2026-09-16T13:39:00Z, receipt_ids: [R-1], result: "sluice.live HTML this round contained no 0x[40 hex] contract address. Mechanism copy describes a Uniswap v3 vault on an ordinary Pons pool and a Uniswap v4 hook labelled being built. Fee illustration uses slot0.feeProtocol = 102 on named Pons pools; those pool addresses were not copied from the HTML." }

claims:
  - { id: CLM-1, field: candidate, value: "sluice | Sluice | @sluice_rh | sluice.live", class: claim, observed_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site sluice.live and handle @sluice_rh name each other; the handle bio publishes the SLUICE address", class: verified, observed_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@sluice_rh", class: claim, observed_at: 2026-09-16T13:37:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "SLUICE", class: verified, observed_at: 2026-09-16T13:36:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() Sluice; token record name Sluice", class: verified, observed_at: 2026-09-16T13:36:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.name, value: "Blockscout verified source name PonsV2LauncherToken", class: verified, observed_at: 2026-09-16T13:38:00Z, receipt_ids: [R-4, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "Site: deposit into an existing Uniswap v3 pool; Sluice holds one full-range position, collects fees, and compounds them on deposit, withdraw, or a permissionless compound call. A Uniswap v4 hook is labelled being built.", class: claim, observed_at: 2026-09-16T13:34:00Z, receipt_ids: [R-1], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xb48d34dd8b53324cb8525461c8e548522db885ec", class: verified, observed_at: 2026-09-16T13:36:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: relationship, value: "SLUICE was created by PonsV2LaunchAndBuy.launchAndBuy at 2026-08-28T09:00:57Z; Blockscout creator is PonsV2LaunchDeployer. ponsfamily.com/launchpad lists Sluice ($SLUICE). Independent pad launches remain separate from census pons.", class: verified, observed_at: 2026-09-16T13:38:00Z, receipt_ids: [R-10, R-11, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "owner() on 0xb48d34dd…85ec reverted. Creation tx from EOA 0x65c0F179829BeDC255Fdee81A94dA2A5B624F504; Blockscout creator is PonsV2LaunchDeployer. Launch params creator field is that EOA. No token owner() value this round.", class: verified, observed_at: 2026-09-16T13:36:00Z, receipt_ids: [R-5, R-10], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: lifecycle, value: "Token bytecode is live on chain 4663. Site copy still labels the v4 hook being built. No vault or hook address was located on sluice.live HTML.", class: claim, observed_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "CoinGecko market_cap.usd 35543 at 2026-09-16T13:32:40Z for platforms.robinhood 0xb48d34dd8b53324cb8525461c8e548522db885ec; Llama protocol/sluice not found", class: claim, observed_at: 2026-09-16T13:36:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "DexScreener Uniswap v4 SLUICE/ETH pair volume.h24 12720.61 liquidity.usd 17153.2; Blockscout holders_count 956", class: claim, observed_at: 2026-09-16T13:35:00Z, receipt_ids: [R-4, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-14, field: communications.status, value: "api.fxtwitter.com/sluice_rh profile 200; /tweets HTTP 404. Signed-in Icarus X scout 2026-09-16: Arc/Floor/Sluice X gap pass incomplete; no @sluice_rh status id or post body copied. No invented Sluice posts.", class: claim, observed_at: 2026-09-16T13:46:00Z, receipt_ids: [R-12, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: other, value: "This packet is PR #166 on grok-bot/20260916/WORK-20260916-grok-bot-discovery-inventory. Prior open discovery PRs: #165 twofold, #164 canopy, #163 arcus. #92 site trenches stream, no packet files.", class: claim, observed_at: 2026-09-16T13:46:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on sluice.live HTML, the Pons launchpad token page, or CoinGecko links this round.", class: claim, observed_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-6, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: other, value: "Arrow Finance docs at app.arrowfinance.io/docs publish Launchpad 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe and ReferralRouter 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb. RPC eth_getCode nonempty (16420 B and 4611 B). Arrow is already census slug arrow; no update packet. Llama arrowpad twitter RobinArrowPad and arrowpad.fun twitter Arrowpadfun are not @ArrowFinanceio.", class: claim, observed_at: 2026-09-16T13:39:00Z, receipt_ids: [R-13, R-14, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Keep distinct from census pons. Shared deployer and PonsV2LauncherToken verified name do not merge sluice.live / @sluice_rh into ponsfamily.com / @ponsdotfamily.", class: claim, observed_at: 2026-09-16T13:40:00Z, receipt_ids: [R-1, R-2, R-16], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Icarus signed-in X scout recovered dated posts for census handles @ArrowFinanceio, @uponrh, @deltaliquidity, @ponsdotfamily and KOL @0xSammy. Those posts are not Sluice candidate events and were not filed as an arrow update. @Hookrfun and @ahboyash: no material dated claims in the scout window.", class: claim, observed_at: 2026-09-16T13:46:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.name
    claim_ids: [CLM-5, CLM-6]
    material_effect: "RPC name() and the token record are Sluice/SLUICE; Blockscout verified source name is PonsV2LauncherToken. Record the Pons launcher-template name; do not treat that name as census-pons ownership of sluice.live."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "SLUICE token created via Pons launchAndBuy"
    summary: "Tx 0xc2d8b438…2926 at 2026-08-28T09:00:57Z called PonsV2LaunchAndBuy.launchAndBuy with name Sluice symbol SLUICE and website https://sluice.live/. Resulting token 0xb48d34dd…85ec is live on chain 4663."
    account: null
    occurred_at: 2026-08-28T09:00:57Z
    observed_at: 2026-09-16T13:38:00Z
    affected_fields: [deployment.address, identity.symbol, relationship]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4, R-5, R-10]
    tag: other

receipts:
  - { id: R-1, publisher: Sluice, title: "sluice.live", url: "https://sluice.live/", published_at: null, accessed_at: 2026-09-16T13:34:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-7, CLM-11, CLM-16, CLM-18], excerpt: "Liquidity that runs itself. Deposit into a Uniswap V3 pool that already exists. Sluice holds the position, collects the fees it earns, and puts them back to work. The pool is an ordinary Pons Uniswap v3 pool. The version being built replaces that arrangement with a Uniswap v4 hook. HTML this round had no 0x40-hex address." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/sluice_rh", url: "https://api.fxtwitter.com/sluice_rh", published_at: null, accessed_at: 2026-09-16T13:34:20Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-8, CLM-18], excerpt: "code 200. screen_name sluice_rh name Sluice id 2092415666070437889 followers 875 tweets 72 joined Wed Aug 26 00:56:17 +0000 2026. description Dynamic liquidity infrastructure for Robinhood. Auto-compounding pools, adaptive fees, and onchain liquidity. CA: 0xb48d34dd8b53324cb8525461c8e548522db885ec. website https://sluice.live/." }
  - { id: R-3, publisher: X, title: "x.com/sluice_rh", url: "https://x.com/sluice_rh", published_at: null, accessed_at: 2026-09-16T13:37:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1], excerpt: "Profile URL for handle @sluice_rh. Status bodies were not recovered from this URL this round; profile fields were copied from api.fxtwitter.com/sluice_rh." }
  - { id: R-4, publisher: Blockscout, title: "SLUICE 0xb48d34dd…85ec", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xb48d34dd8b53324cb8525461c8e548522db885ec", published_at: null, accessed_at: 2026-09-16T13:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, EVT-1], excerpt: "is_contract true is_verified true name PonsV2LauncherToken proxy_type null. token name Sluice symbol SLUICE decimals 18 holders_count 956 total_supply 1000000000000000000000000000. creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xc2d8b438e61657e41bc6389ab744d334359c72d3eaad147fe582c49c1f622926." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-16T13:36:00Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-10, CLM-11, EVT-1], excerpt: "eth_chainId 0x1237. 0xb48d34dd8b53324cb8525461c8e548522db885ec code 3248 B name Sluice symbol SLUICE decimals 18 totalSupply 1e27 owner() execution reverted. Creator 0x3711ceA4…1A42 code 20906 B. At block 64549354 Launchpad 0x1Badc838…2aAe 16420 B ReferralRouter 0xC2166628…eaFb 4611 B." }
  - { id: R-6, publisher: CoinGecko, title: "coins/sluice", url: "https://api.coingecko.com/api/v3/coins/sluice", published_at: null, accessed_at: 2026-09-16T13:33:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-12, CLM-16], excerpt: "id sluice symbol sluice name Sluice asset_platform_id robinhood platforms.robinhood 0xb48d34dd8b53324cb8525461c8e548522db885ec. homepage https://sluice.live twitter_screen_name sluice_rh preview_listing false. market_data.market_cap.usd 35543 total_volume.usd 10023.68 last_updated 2026-09-16T13:32:40.000Z. Tickers include Pons V2 Dex." }
  - { id: R-7, publisher: DefiLlama, title: "protocol/sluice", url: "https://api.llama.fi/protocol/sluice", published_at: null, accessed_at: 2026-09-16T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "HTTP body: Protocol not found. No Llama chain-slice TVL for slug sluice this round." }
  - { id: R-8, publisher: DexScreener, title: "SLUICE token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xb48d34dd8b53324cb8525461c8e548522db885ec", published_at: null, accessed_at: 2026-09-16T13:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13], excerpt: "Uniswap v4 SLUICE/ETH pair 0x10cb519f…2b90b chainId robinhood volume.h24 12720.61 liquidity.usd 17153.2 fdv 35669. info.websites https://sluice.live/ info.socials https://x.com/sluice_rh. Additional SLUICE/ETH and SLUICE/USDG v4 rows exist; their h24 volumes were not added to 12720.61." }
  - { id: R-9, publisher: Blockscout, title: "Verified source 0xb48d34dd…85ec", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xb48d34dd8b53324cb8525461c8e548522db885ec", published_at: null, accessed_at: 2026-09-16T13:35:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "name PonsV2LauncherToken is_verified true is_fully_verified true language solidity compiler v0.8.35+commit.47b9dedd verified_at 2026-08-28T10:11:53.879942Z. decoded_constructor_args name_ Sluice symbol_ SLUICE. file_path present; this round did not copy the full source into the packet." }
  - { id: R-10, publisher: Blockscout, title: "Creation tx 0xc2d8b438…2926", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xc2d8b438e61657e41bc6389ab744d334359c72d3eaad147fe582c49c1f622926", published_at: 2026-08-28T09:00:57Z, accessed_at: 2026-09-16T13:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-10, EVT-1], excerpt: "timestamp 2026-08-28T09:00:57Z status ok method launchAndBuy from EOA 0x65c0F179829BeDC255Fdee81A94dA2A5B624F504 to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948. params name Sluice symbol SLUICE website https://sluice.live/ first social https://x.com/home?lang=en creator 0x65c0F179…F504." }
  - { id: R-11, publisher: Pons, title: "Pons launchpad page for SLUICE", url: "https://www.ponsfamily.com/launchpad/0xb48d34dd8b53324cb8525461c8e548522db885ec", published_at: null, accessed_at: 2026-09-16T13:35:40Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-16], excerpt: "Sluice ($SLUICE) · pons. Paired ETH. $SLUICE powers the programmable liquidity layer for Robinhood Chain, built on Uniswap V4 hooks. Creator 0x65c0…F504 · 1.00% creator tax. Supply 1,000,000,000 SLUICE Fixed at launch. Market Uniswap v4." }
  - { id: R-12, publisher: FixTweet, title: "api.fxtwitter.com tweets 404 sample", url: "https://api.fxtwitter.com/sluice_rh/tweets", published_at: null, accessed_at: 2026-09-16T13:37:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-14], excerpt: "HTTP 404 for /sluice_rh/tweets. Same 404 for /tweets on MosaicETF rallypadfun scalarliquidity brickswalltech GwoodFinance ArrowFinanceio Arrowpadfun ponsdotfamily twofoldfi canopyfinance arcus_xyz v4dotfun FundedProtocol. No status bodies copied." }
  - { id: R-13, publisher: Arrow Finance, title: "app.arrowfinance.io/docs", url: "https://app.arrowfinance.io/docs", published_at: null, accessed_at: 2026-09-16T13:38:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "The live launchpad deployment on Robinhood Chain. Launchpad 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe. ReferralRouter 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb. const LAUNCHPAD and ROUTER in the page match those addresses. Census slug arrow already carries this Launchpad." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "Arrow Launchpad / ReferralRouter eth_getCode", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-16T13:39:00Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "At eth_blockNumber 64549354: 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe code 16420 B. 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb code 4611 B. Chain id 4663." }
  - { id: R-15, publisher: DefiLlama, title: "protocol/arrowpad", url: "https://api.llama.fi/protocol/arrowpad", published_at: null, accessed_at: 2026-09-16T13:36:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-17], excerpt: "name ArrowPad twitter RobinArrowPad chains [Robinhood Chain] currentChainTvls['Robinhood Chain'] 1.01255 category Launchpad. Sibling list row ArrowPad.fun slug arrowpad.fun twitter Arrowpadfun. Neither twitter equals census handle @ArrowFinanceio." }
  - { id: R-16, publisher: Proofline main, title: "census.yaml pons / no sluice row", url: "https://github.com/harsharn10/proofline/blob/2f7f2c482ba49fe2477cebc7a42c798a689e4c7a/content/census.yaml", published_at: null, accessed_at: 2026-09-16T13:34:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-18], excerpt: "182 slugs on this SHA. slug pons handle @ponsdotfamily official site https://ponsfamily.com. No census slug sluice, mosaicetf, twofold, canopy, or arcus. Nearby census rows include hedge, arc, floor, arrow." }
  - { id: R-17, publisher: GitHub, title: "Open pull requests targeting main", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-16T13:46:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-15], excerpt: "Open PRs: #166 this packet. #165 WORK-20260915-grok-bot-discovery-inventory candidate twofold. #164 WORK-20260914 canopy. #163 WORK-20260911 arcus. #92 site researched-asset activity stream, no research/inbox/packets files." }
  - { id: R-18, publisher: Proofline main, title: "accounts.yaml @sluice_rh", url: "https://github.com/harsharn10/proofline/blob/2f7f2c482ba49fe2477cebc7a42c798a689e4c7a/content/accounts.yaml", published_at: null, accessed_at: 2026-09-16T13:34:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [], excerpt: "handle @sluice_rh tier watch role project. No slug field on the row. Nearby unused watch rows this round: @MosaicETF @rallypadfun @scalarliquidity @brickswalltech @GwoodFinance. @twofoldfi is #165. @canopyfinance is #164. @arcus_xyz is #163." }
  - { id: R-19, publisher: Icarus signed-in X scout, title: "@sluice_rh Latest gap pass incomplete", url: "https://x.com/sluice_rh", published_at: null, accessed_at: 2026-09-16T13:46:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-14, CLM-19], excerpt: "Signed-in Icarus box browser, 2026-09-16: Arc/Floor/Sluice X gap pass incomplete. No @sluice_rh status id or post body recovered. Dated posts recovered for other handles were not Sluice and were not copied as candidate events. No invented Sluice posts." }

gaps:
  - { area: communications, priority: P0, question: "What dated status ids did @sluice_rh post, and do any name a vault or hook address?", checked: "api.fxtwitter.com/sluice_rh profile 200; /tweets 404; signed-in Icarus X scout 2026-09-16 reported Arc/Floor/Sluice X gap pass incomplete; no @sluice_rh status id copied", next: "retry Latest on @sluice_rh; copy status id, date, and exact text if recovered; do not invent posts" }
  - { area: product, priority: P0, question: "Where is the live Uniswap v3 vault or v4 hook contract, if any, on chain 4663?", checked: "sluice.live HTML had no 0x40-hex address; bio CA is the PonsV2LauncherToken ERC-20; RPC name Sluice/SLUICE", next: "search app JS/docs for a vault/hook address; eth_getCode any candidate; do not treat the launcher token as the vault" }
  - { area: identity, priority: P0, question: "Does a later seed treat SLUICE as an independent project launched through Pons, or hold it as a pons launcher-token profile?", checked: "possible_matches pons with shared-deployer recorded; handle and domain differ; CON-1 open", next: "controller disposition before compiling a sluice census row" }
  - { area: control, priority: P1, question: "Who can change Sluice vault fees or hook parameters once a vault/hook is located?", checked: "token owner() reverted; creation from EOA 0x65c0F179…F504 through PonsV2LaunchAndBuy", next: "eth_call privileged getters on any located vault/hook; do not infer token control from the Pons factory" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches a Sluice vault or hook bytecode?", checked: "sluice.live, Pons token page, CoinGecko links, 2026-09-16; no report URL copied", next: "ask in public and record the answer as a claim; match bytecode if a report appears" }
  - { area: team, priority: P1, question: "Does EOA 0x65c0F179…F504 control sluice.live / @sluice_rh, and is there a repository?", checked: "launchAndBuy from that EOA; site and handle cross-link; no repository URL located this round", next: "do not merge the EOA with the site or handle without a signed or on-chain link" }
  - { area: deployment, priority: P1, question: "Which Uniswap v3 pool does the current vault sit on, of the Pons pools named in the fee copy (CASHCAT, PONS, HMM, PIPEDOG)?", checked: "site names those pools and slot0.feeProtocol = 102; no pool address in HTML", next: "copy a pool address from a later site/docs revision and reproduce slot0" }
  - { area: economics, priority: P2, question: "Is there a Llama protocol row or vault TVL distinct from the SLUICE token market cap?", checked: "Llama protocol/sluice not found; CoinGecko market_cap 35543; DexScreener pair liquidity 17153.2 is pair-level", next: "do not treat token FDV as vault TVL; re-query Llama if a slug appears" }
  - { area: activity, priority: P2, question: "What 24h volume is the deepest SLUICE/ETH v4 pair versus thin SLUICE/USDG rows?", checked: "DexScreener deepest SLUICE/ETH h24 12720.61; other rows were not summed", next: "keep pair-level DexScreener; do not average with CoinGecko total_volume" }

---

# Discovery inventory 2026-09-16 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Sluice: sluice.live describes a Uniswap v3 vault that holds one full-range position in a pool somebody else deployed, compounds fees on deposit, withdraw, or a permissionless compound call, and a Uniswap v4 hook still labelled being built. Official site sluice.live and handle @sluice_rh name each other; the handle bio publishes SLUICE `0xb48d34dd8b53324cb8525461c8e548522db885ec`. RPC this round reproduced that ERC-20 on chain 4663 (name Sluice, symbol SLUICE, 3248 B). Blockscout verified source name is PonsV2LauncherToken. Distinct from census pons. Open #165 already inventoried twofold; #164 canopy; #163 arcus.

Themes: auto-compounding, uniswap-v3, lp-manager

TL;DR: Sluice is an auto-compounding LP path on Robinhood Chain; SLUICE exists at 0xb48d34dd…85ec and has no census row.

## Why it matters

- Thesis: a native auto-compounding LP vault described on sluice.live, with the bio ERC-20 reproduced on chain 4663 [claim R-1 R-5]
- Traction: CoinGecko robinhood SLUICE market cap about $35.5k at 2026-09-16T13:32:40Z; DexScreener SLUICE/ETH v4 pair 24h volume about $12.7k [claim R-6 R-8]
- Catalyst: site copy still labels a Uniswap v4 hook being built; no hook address was in the HTML this round [claim R-1]

## What could go wrong

- Blockscout verified source name is PonsV2LauncherToken; RPC name() is Sluice [verified R-4 R-5]
- sluice.live HTML published no vault or hook address; only the bio ERC-20 was reproduced [claim R-1 R-5]
- owner() on the token reverted; creation went through PonsV2LaunchAndBuy from EOA 0x65c0F179…F504 [verified R-5 R-10]

## Operations log

- Main SHA read: 2f7f2c482ba49fe2477cebc7a42c798a689e4c7a (origin/main). AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/research-system.md §§4–7 and §10, docs/templates/research-packet-v2.md, docs/admission-policy.md, skills/research-seed/SKILL.md, content/census.yaml (182 slugs), content/accounts.yaml.
- Open PRs including drafts: this packet is #166. #165 twofold, #164 canopy, #163 arcus not duplicated. #92 site trenches stream; no packet files.
- Follow-list: sampled project handles via api.fxtwitter.com user objects. Profile claims recovered for @sluice_rh (SLUICE CA + sluice.live), @MosaicETF (CA 0x77665080…e025 + mosaicetf.com), @rallypadfun (rallypad.fun), @scalarliquidity ($SCL 0xBe92b334…07bBE + scalarliquidity.com), @brickswalltech (CA 0x7b7faa88…4643 + brickswall.tech), @GwoodFinance (greenwood.fi / app.greenwood.fi), @ArrowFinanceio (linktr.ee/arrowfinanceio), @Arrowpadfun (arrowpad.fun), @ponsdotfamily, @twofoldfi (already #165), @canopyfinance (already #164), @arcus_xyz (already #163), @v4dotfun (powered by @canopyfinance), @FundedProtocol (thenews.gg). Collector /tweets paths 404. No invented posts.
- Signed-in Icarus X scout (2026-09-16): Arc/Floor/Sluice X gap pass incomplete; no @sluice_rh status body. Recovered dated posts (census/KOL, not packed as this candidate's events; APR/TVL figures not reproduced here): @ArrowFinanceio 2026-09-13 https://x.com/ArrowFinanceio/status/2099190771769315389 aUSD/USDG staking 229% APR claim and https://staking.arrowfinance.io/stake; @ArrowFinanceio 2026-09-12 https://x.com/ArrowFinanceio/status/2098922286623457713 LP staking live ~1000% APR claim; @uponrh 2026-09-16 https://x.com/uponrh/status/2100216099119808685 CASHCAT pools APR image claim and https://x.com/uponrh/status/2100129850702877108 veUP tokenomics amplify; @deltaliquidity 2026-09-15 https://x.com/deltaliquidity/status/2099959749135548899 Alchemy plus CA 0xe8ffd7e24187f72afb08d75b1bb13088a989a791 and https://deltaliquidity.app; @ponsdotfamily 2026-09-15 https://x.com/ponsdotfamily/status/2100012509960798686 creator rewards $125,000,000 claim and https://ponsfamily.com/launchpad; @0xSammy 2026-09-15 https://x.com/0xSammy/status/2099809118647115951 Standard Reserve vs NetNet commentary and https://x.com/0xSammy/status/2099851896034828361 article amplify. @Hookrfun and @ahboyash: no material dated claims in that window. Arrow posts belong on census slug arrow, not an inventory event or a new update packet this round.
- Icarus box independently reproduced SLUICE 0xb48d34dd8b53324cb8525461c8e548522db885ec eth_getCode ~3248 B, symbol() SLUICE, decimals 18, chainId 4663; site sluice.live auto-compounding Uniswap v3 vault on existing Pons pools plus v4 hook being built; @sluice_rh website sluice.live, bio publishes that CA. Matches this packet's RPC and site reads.
- Gap hunt: Sluice / @sluice_rh / sluice.live did not collapse to a census row or to #163/#164/#165. Shared PonsV2LaunchDeployer is launch infrastructure; handle and domain differ from census pons. CON-1 records PonsV2LauncherToken vs name() Sluice. Other watch names without a census slug this round and not packed: MosaicETF, rallypadfun, scalarliquidity, brickswalltech, GwoodFinance, FundedProtocol, v4dotfun. HedgeOnHood and ArcLiquidity already have census rows hedge and arc. Floor already census slug floor.
- Arrow observation (not a second candidate; no update packet): app.arrowfinance.io/docs still publishes Launchpad 0x1Badc838…2aAe and ReferralRouter 0xC2166628…eaFb; RPC eth_getCode nonempty (16420 B / 4611 B). Those addresses are already on census slug arrow. Llama ArrowPad twitter RobinArrowPad and ArrowPad.fun twitter Arrowpadfun are not @ArrowFinanceio.
- Surfaces opened: sluice.live, api.fxtwitter.com profiles and /tweets, CoinGecko coins/sluice, DexScreener token API, Llama protocol/sluice (not found) and protocol/arrowpad, ponsfamily.com/launchpad token page, app.arrowfinance.io/docs, Blockscout api/v2 (token, verified source, creation tx, PonsV2LaunchDeployer), RPC https://rpc.mainnet.chain.robinhood.com.
- Addresses checked on 4663: SLUICE 0xb48d34dd8b53324cb8525461c8e548522db885ec exists_on_4663 true, verified source true, 3248 B, name Sluice / SLUICE, owner() reverted. Creator PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 20906 B (census pons, not listed as a Sluice deployment). PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 named on the creation tx. Launch EOA 0x65c0F179829BeDC255Fdee81A94dA2A5B624F504. Arrow Launchpad 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe 16420 B. ReferralRouter 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb 4611 B.
- Candidate proposed: sluice | Sluice | @sluice_rh | sluice.live (coverage candidate; this file is inventory only).
- Rate limits: collector X status fetch 404; Icarus signed-in scout recovered other-handle posts but not @sluice_rh. Stop after this packet.
