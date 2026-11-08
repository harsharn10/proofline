---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260922-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 211271a1561ddd1a665dae1b5e2134c4f37b00ab
slug: discovery-inventory
name: Discovery inventory 2026-09-22
packet_tier: seed
as_of: 2026-09-22T13:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260922-grok-bot-discovery-inventory.md

identity:
  crosslink_claim_ids: [CLM-2]
  canonical_name: Discovery inventory 2026-09-22
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census pons is Pons at ponsfamily.com / @ponsdotfamily, primary leaf launch/bonding-curve. Funded is thenews.gg / @fundedprotocol / FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E. The homepage links a Pons launchpad URL, Blockscout names the token PonsV2LauncherToken, and the launch tx calls the Pons v2 launch-and-buy router. Shared launchpad infrastructure is not a merge."
    - slug: sight
      signals: [other]
      contrary_signals:
        - "Census sight is Sight at sighthood.com / @sight_hood, primary leaf markets/prediction. Funded is thenews.gg / @fundedprotocol. Category cousin only. Not a merge."
    - slug: likes-fun
      signals: [other]
      contrary_signals:
        - "Census likes-fun is likes.fun / @likesdotfun, primary leaf markets/prediction. Funded is thenews.gg / @fundedprotocol. Category cousin only. Not a merge."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-22. Suggested lead Funded Protocol / @fundedprotocol / thenews.gg is not a census row and is not the primary of open #163 (arcus), #164 (canopy), #165 (twofold), #166 (sluice), #167 (mosaic), #168 (greenwood), or #169 (scalar). Homepage links $FUND to a Pons launchpad URL embedding 0x98af77d765465928062c1aBB28DC7A8c0366c13E. RPC on chain 4663 reproduced name FUNDED Protocol, symbol FUND, 18 decimals, totalSupply 1e27, 3248 B. X bio has no CA. Homepage HTML does not say Robinhood Chain. No prop-firm leaf exists. Closest leaf if admitted later is markets/prediction (TheNews prediction challenges). trading/prop-amm is a proprietary-liquidity AMM and does not fit. Proposed census slug funded (or funded-protocol); entity_kind protocol; chain_scope robinhood-native only as a claim (token on 4663 plus Pons Robinhood launchpad page; product homepage does not say it). Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-9], note: "" }
  native_play: { status: pass, claim_ids: [CLM-8], note: "Token code is on chain 4663 and the official site links a Pons Robinhood Chain launchpad URL. Homepage HTML has no Robinhood sentence. The 2026-08-25 news article is a claim." }
  citable: { status: pass, claim_ids: [CLM-2], note: "" }
  research_story: { status: pass, claim_ids: [CLM-7], note: "" }

links:
  - { kind: site, url: "https://www.thenews.gg/", authenticity: confirmed }
  - { kind: whitepaper, url: "https://www.thenews.gg/funded/litepaper", authenticity: confirmed }
  - { kind: x, url: "https://x.com/fundedprotocol", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/thenewsgg", authenticity: unconfirmed }
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0x98af77d765465928062c1aBB28DC7A8c0366c13E", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x98af77d765465928062c1aBB28DC7A8c0366c13E", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/tx/0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed", authenticity: confirmed }
  - { kind: other, url: "https://fundedprotocol.com/", authenticity: confirmed }
  - { kind: other, url: "https://cryptobriefing.com/funded-protocol-decentralized-prop-firm-robinhood-chain/", authenticity: confirmed }

deployments:
  - label: FUND token (RPC name FUNDED Protocol, symbol FUND; Blockscout contract name PonsV2LauncherToken)
    role: token
    address:
      value: "0x98af77d765465928062c1aBB28DC7A8c0366c13E"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-22
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-4, R-6, R-7, R-8]

metrics:
  - { kind: market_cap, value: 2936.73, currency: USD, as_of: 2026-09-22T13:40:00Z, window: point, method: "Pons launchpad page visible market cap text; third-party UI, not protocol TVL", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 279, currency: null, as_of: 2026-09-22T13:40:00Z, window: point, method: "Blockscout api/v2 token.holders_count for 0x98af77d765465928062c1aBB28DC7A8c0366c13E", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 0, currency: USD, as_of: 2026-09-22T13:40:00Z, window: 24h, method: "GeckoTerminal token attributes volume_usd.h24; DexScreener pair list was empty", class: claim, receipt_ids: [R-12] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-22T13:37:06Z, receipt_ids: [R-4], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x42778d5 (69695701). FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E eth_getCode 3248 B prefix 0x60806040; name() FUNDED Protocol; symbol() FUND; decimals() 18; totalSupply() 1e27 (1_000_000_000 FUND at 18 decimals); owner() reverted. BRICKS 0x7b7faa885c237faba733e7006e80149ba9224643 3248 B name Bricks symbol BRICKS decimals 18 supply about 929182592.385." }
  - { id: REP-2, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-2, R-3], result: "thenews.gg title thenews.gg — Your next win; By Funded Protocol; links https://x.com/fundedprotocol and https://t.me/thenewsgg; two hrefs to https://www.ponsfamily.com/launchpad/0x98af77d765465928062c1aBB28DC7A8c0366c13E; zero Robinhood mentions in the HTML. @fundedprotocol website http://thenews.gg; bio has no 40-hex CA. Profile fields copied from api.fxtwitter.com." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-22T13:40:00Z, receipt_ids: [R-10, R-11, R-12, R-31], result: "DexScreener token-pairs/v1, tokens/v1, and search by CA each returned no pairs. Llama GET /protocol/funded-protocol and /protocol/funded both returned Protocol not found. GeckoTerminal token GET 200: name FUNDED Protocol, symbol FUND, fdv_usd 2872.36, total_reserve_in_usd 3738.77, volume_usd.h24 0, market_cap_usd null, launchpad completed_at 2026-08-25T15:00:24Z, migrated pool id 32 bytes." }
  - { id: REP-4, method: document-scope, chain_id: 4663, checked_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-5], result: "Homepage: simulated prediction challenges, keep 80% of the profits, all accounts are 100% simulated, $FUND litepaper path /funded/litepaper. Litepaper PDF 7 pages, Version 0.1 July 2026: LPs deposit USDT or other stables into a Capital Pool; Risk Engine; challenge fees repurchase FUNDED tokens then split to LP rewards and burns; TheNews will be the first prediction-market prop firm. PDF has no CA and no Robinhood sentence." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-22T13:43:23Z, receipt_ids: [R-4, R-7, R-9], result: "eth_getTransactionByHash 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed on chainId 0x1237, block 0x2bb24f9 (45819129), blockTimestamp 2026-08-25T15:00:24Z, status 0x1, from 0xd3ee454010d4bb202445b9a09693858f2caa848c (eth_getCode empty), to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948, contractAddress null, first log address is the FUND token. Blockscout api/v2 names that hash creation_transaction_hash, contract name PonsV2LauncherToken, is_verified true, creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42, holders_count 279." }

claims:
  - { id: CLM-1, field: candidate, value: "funded | Funded Protocol | @fundedprotocol | thenews.gg", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "thenews.gg links x.com/fundedprotocol and t.me/thenewsgg. The handle website is http://thenews.gg. The homepage embeds FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E in a Pons launchpad href. The X bio has no contract address.", class: verified, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@fundedprotocol", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "FUND", class: verified, observed_at: 2026-09-22T13:37:06Z, receipt_ids: [R-1, R-4, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() FUNDED Protocol; homepage By Funded Protocol; handle name FUNDED Protocol; litepaper title Funded Protocol", class: verified, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: product.mechanism, value: "Homepage presents TheNews prediction challenges: yes/no on news events, keep 80% of the profits, entry fees from free to $299 for a $10k-$100k simulated account, and states that all accounts are 100% simulated.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "Litepaper v0.1 July 2026 describes LPs depositing USDT or other approved stables into a Capital Pool, operators running prop products, a Risk Engine, challenge fees used to repurchase FUNDED tokens then split between LP rewards and burns, funded trading profits to LPs, and idle stables that may earn yield. The first named app is TheNews, a prediction-market prop firm.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: "robinhood-native as a claim, with a gap on the product site. FUND bytecode is on chain 4663. The official homepage links a Pons launchpad URL, and that page says fixed-supply tokens on Robinhood Chain. thenews.gg HTML and the litepaper PDF contain no Robinhood sentence. Crypto Briefing 2026-08-25 says the protocol is live on Robinhood Chain; that article is news, not an onchain pair index.", class: claim, observed_at: 2026-09-22T13:43:00Z, receipt_ids: [R-1, R-4, R-5, R-6, R-13], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x98af77d765465928062c1aBB28DC7A8c0366c13E", class: verified, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-4, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-10, field: lifecycle, value: "FUND bytecode is live on chain 4663. Blockscout and RPC place the launch transaction at 2026-08-25T15:00:24Z. The homepage presents simulated challenges. The July 2026 litepaper still uses future tense for TheNews. No capital-pool contract address was located.", class: claim, observed_at: 2026-09-22T13:43:23Z, receipt_ids: [R-1, R-4, R-5, R-7, R-9], reproduction_ids: [REP-1, REP-4, REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Pons launchpad UI at access: market cap $2,936.73, price $0.000003, supply 1,000,000,000 FUND fixed at launch, Market Uniswap v4, creator shown as 0xD3Ee…848C with 1.00% creator tax. A degraded-performance banner was on the page. Third-party UI, not verified TVL.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "GeckoTerminal token GET 200: fdv_usd 2872.3643218367, total_reserve_in_usd 3738.77, volume_usd.h24 0, market_cap_usd null, price_usd 0.000002872364322, launchpad completed true at 2026-08-25T15:00:24Z, migrated pool 0x1dc8461d7ec5b313e26ba6e6bc28f9d925a2a8842bd8b260b1575acd84329123 (32 bytes, not listed as a 20-byte deployment).", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "GET api.llama.fi/protocol/funded-protocol and /protocol/funded both returned Protocol not found. No Llama TVL attached.", class: verified, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-11, R-31], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener token-pairs/v1, tokens/v1, and search for this CA returned no pairs. No DexScreener pair URL this round.", class: verified, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on thenews.gg, the litepaper PDF, the Pons token page, or fundedprotocol.com this round.", class: unknown, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: relationship, value: "Keep distinct from census pons. Shared Pons launchpad URL, PonsV2LauncherToken template name, creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (Pons v2 launch deployer on the pons project), and tx.to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 (Pons v2 launch-and-buy router) are launch infrastructure. Official domain and handle differ.", class: claim, observed_at: 2026-09-22T13:43:23Z, receipt_ids: [R-1, R-6, R-7, R-9, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: relationship, value: "Keep distinct from census sight (@sight_hood / sighthood.com) and likes-fun (@likesdotfun / likes.fun). Those rows share a prediction-market leaf only.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: other, value: "Open PRs #163-#169 are prior discovery inventories and are not re-packed. #169 primary, read this round, is Scalar Liquidity. #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, and #168 greenwood stay on those PRs. #92 is a site stream and has no discovery packet. Floor, Ravenhood, Mosaic, Sluice, Twofold, Canopy, and Arcus are already packed or in the census.", class: claim, observed_at: 2026-09-22T13:42:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: other, value: "Rejected or runner-up this round, not packed as primary: brickswalltech / @brickswalltech / brickswall.tech (bio CA exists on 4663; homepage names Robinhood Chain mainnet 4663 and does not print the CA; DexScreener not used as a pair); rallypadfun (bio has no CA; site is a Uniswap v4 memecoin launchpad and no 40-hex CA was in the HTML); MinteraNFT (bio Maintaince; site connection timed out; profile website null); HoodedDotMeme (bio has no CA; thin Hooded. Launchpad page); fefehood (site HTTP 502); ArcLiquidity is census slug arc.", class: claim, observed_at: 2026-09-22T13:42:00Z, receipt_ids: [R-4, R-17, R-18, R-19, R-20, R-21, R-22, R-23, R-26, R-27, R-28, R-29], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: other, value: "content/accounts.yaml already lists @FundedProtocol as watch/project with no slug. census.yaml (182 slugs) has no funded, Funded Protocol, FUND, thenews.gg, or 0x98af77 row.", class: claim, observed_at: 2026-09-22T13:42:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: control.owner, value: "owner() on FUND reverted. Launch tx from is 0xd3ee454010d4bb202445b9a09693858f2caa848c with no code, matching the Pons UI creator prefix 0xD3Ee…848C. Blockscout creator_address_hash is the Pons v2 launch deployer, not an admin key named on thenews.gg. No timelock is named on the homepage.", class: verified, observed_at: 2026-09-22T13:43:23Z, receipt_ids: [R-4, R-6, R-7, R-9], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: taxonomy.primary-leaf, value: "funded | markets/prediction", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-23, field: taxonomy.entity-kind, value: "funded | protocol", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: "account.@FundedProtocol.slug", value: "If admitted later, map @FundedProtocol to proposed census slug funded (or funded-protocol). Already watch/project in accounts.yaml with no slug. Inventory only; this packet does not write content/accounts.yaml.", class: claim, observed_at: 2026-09-22T13:42:00Z, receipt_ids: [R-2, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "Follow-list and open-PR handles were profile-only via api.fxtwitter.com HTTP 200. No dated status IDs were captured. Bios only included @uponrh, @deltaliquidity, @ArrowFinanceio, @ponsdotfamily, @Hookrfun, @whatthehookv4, @ClutchMarkets, @0xSammy, @graildoteth, @SammyEth, @dfarmer, @mead, and the open-PR handles. @SammyEth is a different spelling from a prior sammyeth handle and is not joined to it here. @ponsdotfamily was not empty this pass.", class: claim, observed_at: 2026-09-22T13:42:00Z, receipt_ids: [R-25, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "api.fxtwitter.com/fundedprotocol profile 200 (name FUNDED Protocol, 349 followers, 85 tweets, joined Thu Jul 16 09:34:54 +0000 2026, verification type individual, website http://thenews.gg). /tweets HTTP 404. Signed-in X timeline scout was blocked. No status id was copied.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-2, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "Crypto Briefing 2026-08-25 says Funded Protocol is live on Robinhood Chain and that FUND trades on Uniswap and Flap. Class claim (news). DexScreener returned no pairs this round, so that venue sentence was not reproduced as a pair index.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-10, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "Litepaper v0.1 says the first application built on Funded Protocol will be TheNews. That future tense disagrees with the homepage, which presents TheNews challenges as available now.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "Launch transaction 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed at block 45819129, 2026-08-25T15:00:24Z, status success, to Pons v2 launch-and-buy router 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948. Blockscout labels this hash the token creation transaction.", class: verified, observed_at: 2026-09-22T13:43:23Z, receipt_ids: [R-4, R-7, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-30, field: activity.status, value: "GeckoTerminal launchpad completed_at 2026-08-25T15:00:24Z matches the RPC block timestamp. 24h volume on that token endpoint was 0. Blockscout holders_count was 279. Not an independently reproduced activity window.", class: claim, observed_at: 2026-09-22T13:43:23Z, receipt_ids: [R-7, R-12], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-31, field: identity.domain, value: "fundedprotocol.com is a placeholder page (Unlocking Potential, Together; GoDaddy website-builder link; no thenews.gg link and no CA). getfunded.xyz returned HTTP 302 to domains.atom.com/lpd/name/getfunded.xyz and then HTTP 403 Cloudflare, so sale copy was not read. Neither is the official product domain. Prefer thenews.gg.", class: claim, observed_at: 2026-09-22T13:40:36Z, receipt_ids: [R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: identity.repository, value: "No repository URL was located on thenews.gg, the litepaper, or the handle profile this round.", class: unknown, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: taxonomy.primary-leaf, value: "No prop-firm or prop-trading leaf is in schema/taxonomy.json. trading/prop-amm is Proprietary-liquidity AMM and does not describe this capital-pool or prediction-challenge story. markets/prediction is the closest leaf.", class: claim, observed_at: 2026-09-22T13:40:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-6, CLM-28]
    material_effect: "Homepage presents TheNews challenges as available now. Litepaper v0.1 says the first application will be TheNews."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "FUND launch transaction on chain 4663"
    summary: "RPC and Blockscout show transaction 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed at 2026-08-25T15:00:24Z on chain 4663, status success, from 0xd3ee454010d4bb202445b9a09693858f2caa848c to the Pons v2 launch-and-buy router, with a log on FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E. Blockscout names that hash the token creation transaction."
    account: null
    occurred_at: 2026-08-25T15:00:24Z
    observed_at: 2026-09-22T13:43:23Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4, R-7, R-9]
    tag: launch-date

receipts:
  - { id: R-1, publisher: Funded Protocol, title: "thenews.gg", url: "https://www.thenews.gg/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-10, CLM-16, CLM-17, CLM-22, CLM-23, CLM-33], excerpt: "title thenews.gg — Your next win. By Funded Protocol. $FUND Litepaper. Keep 80% of the profits. All accounts are 100% simulated. Links https://x.com/fundedprotocol, https://t.me/thenewsgg, /funded/litepaper, and https://www.ponsfamily.com/launchpad/0x98af77d765465928062c1aBB28DC7A8c0366c13E. Zero Robinhood mentions in the HTML." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/fundedprotocol", url: "https://api.fxtwitter.com/fundedprotocol", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-24, CLM-26], excerpt: "code 200. screen_name fundedprotocol name FUNDED Protocol followers 349 tweets 85 joined Thu Jul 16 09:34:54 +0000 2026. description We fund your bets. You keep the profit. The first decentralized prop firm infrastructure. website http://thenews.gg. verification type individual. No contract address in the bio." }
  - { id: R-3, publisher: X, title: "x.com/fundedprotocol", url: "https://x.com/fundedprotocol", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "Profile URL for @fundedprotocol. Profile fields were copied from api.fxtwitter.com/fundedprotocol. No status id was copied." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-22T13:37:06Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-10, CLM-19, CLM-21, CLM-29, EVT-1], excerpt: "eth_chainId 0x1237. block 0x42778d5. FUND 0x98af77…c13E 3248 B name FUNDED Protocol symbol FUND decimals 18 totalSupply 1e27 owner() reverted. BRICKS 0x7b7faa88…4643 3248 B name Bricks symbol BRICKS. Launch tx 0xe56d4e92…8bed block 45819129 time 2026-08-25T15:00:24Z from 0xd3ee4540…848c (no code) to 0xe33E9E47…2948 status 1." }
  - { id: R-5, publisher: Funded Protocol, title: "Funded Protocol litepaper v0.1", url: "https://www.thenews.gg/funded/litepaper", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-8, CLM-10, CLM-22, CLM-23, CLM-28, CLM-33], excerpt: "PDF 7 pages. Funded Protocol: A Decentralized Capital Infrastructure for Proprietary Trading. Litepaper Version 0.1 July 2026. LPs deposit USDT or other stables into a Capital Pool. TheNews will be the first prediction-market prop firm. No CA and no Robinhood sentence in the PDF." }
  - { id: R-6, publisher: Pons, title: "FUNDED Protocol launchpad page", url: "https://www.ponsfamily.com/launchpad/0x98af77d765465928062c1aBB28DC7A8c0366c13E", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: third-party-data, authority: independent, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-11, CLM-16, CLM-21], excerpt: "title FUNDED Protocol ($FUND) · pons. The capital layer for proprietary trading, powering prop firms on-chain. Supply 1,000,000,000 FUND. Creator 0xD3Ee…848C · 1.00% creator tax. Market cap $2,936.73. Market Uniswap v4. Links Blockscout, x.com/fundedprotocol, t.me/thenewsgg. Page says tokens on Robinhood Chain. Degraded-performance banner present." }
  - { id: R-7, publisher: Blockscout, title: "api/v2 FUND address", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x98af77d765465928062c1aBB28DC7A8c0366c13E", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-10, CLM-16, CLM-21, CLM-29, CLM-30, EVT-1], excerpt: "HTTP 200 JSON. is_contract true. is_verified true. name PonsV2LauncherToken. token name FUNDED Protocol symbol FUND decimals 18 total_supply 1e27 holders_count 279. creation_transaction_hash 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42." }
  - { id: R-8, publisher: Blockscout, title: "FUND address page", url: "https://robinhoodchain.blockscout.com/address/0x98af77d765465928062c1aBB28DC7A8c0366c13E", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. title Robinhood Chain address details for 0x98af77d765465928062c1aBB28DC7A8c0366c13E | Blockscout. Verified-source flag was read from the API, not from this HTML title." }
  - { id: R-9, publisher: Blockscout, title: "FUND launch transaction page", url: "https://robinhoodchain.blockscout.com/tx/0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed", published_at: null, accessed_at: 2026-09-22T13:43:23Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-16, CLM-21, CLM-29, EVT-1], excerpt: "HTTP 200. title Robinhood Chain transaction 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed | Blockscout. Transaction fields were reproduced with eth_getTransactionByHash, not from this HTML shell." }
  - { id: R-10, publisher: DexScreener, title: "FUND token pairs empty", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x98af77d765465928062c1aBB28DC7A8c0366c13E", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14, CLM-27], excerpt: "HTTP 200 body []. Sibling tokens/v1 for the same CA was [] and search by CA returned pairs []. No DexScreener pair URL this round." }
  - { id: R-11, publisher: DefiLlama, title: "protocol/funded-protocol", url: "https://api.llama.fi/protocol/funded-protocol", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13], excerpt: "HTTP 400 body Protocol not found. No TVL attached." }
  - { id: R-12, publisher: GeckoTerminal, title: "FUND token on robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x98af77d765465928062c1aBB28DC7A8c0366c13E", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-30], excerpt: "HTTP 200. name FUNDED Protocol symbol FUND decimals 18. fdv_usd 2872.36. total_reserve_in_usd 3738.77. volume_usd.h24 0. market_cap_usd null. launchpad completed_at 2026-08-25T15:00:24Z. Pool id is 32 bytes. This pass was HTTP 200, not 429." }
  - { id: R-13, publisher: Crypto Briefing, title: "Funded Protocol brings decentralized prop trading to Robinhood Chain", url: "https://cryptobriefing.com/funded-protocol-decentralized-prop-firm-robinhood-chain/", published_at: 2026-08-25T17:53:24Z, accessed_at: 2026-09-22T13:40:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-8, CLM-27], excerpt: "article:published_time 2026-08-25T17:53:24Z. Says FUND is already trading on decentralized exchanges on Robinhood Chain, including Uniswap and a platform called Flap. News claim. Not used as a pair index." }
  - { id: R-14, publisher: GitHub, title: "harsharn10/proofline open pulls and census", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-22T13:42:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-16, CLM-17, CLM-18, CLM-20, CLM-24, CLM-33], excerpt: "Open PRs: #169 20260921 discovery, #168 20260918, #167 20260917, #166 20260916, #165 20260915, #164 20260914, #163 20260911, #92 site stream. Census 182 slugs. No funded / thenews.gg / 0x98af77 row. accounts.yaml @FundedProtocol watch/project, no slug. schema/taxonomy.json has markets/prediction and no prop-firm leaf." }
  - { id: R-15, publisher: Funded Protocol, title: "fundedprotocol.com", url: "https://fundedprotocol.com/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-31], excerpt: "title Funded Protocol. Visible line Unlocking Potential, Together. No thenews.gg link, no 40-hex CA, no Robinhood sentence. External href is a GoDaddy website-builder URL. Weak placeholder. Prefer thenews.gg." }
  - { id: R-16, publisher: getfunded.xyz, title: "getfunded.xyz redirect", url: "https://getfunded.xyz/", published_at: null, accessed_at: 2026-09-22T13:40:36Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-31], excerpt: "HTTP 302 Location https://domains.atom.com/lpd/name/getfunded.xyz then HTTP 403 Cloudflare title Just a moment. Sale-page copy was not readable. Not treated as an official product site." }
  - { id: R-17, publisher: bricks, title: "brickswall.tech", url: "https://brickswall.tech/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "title BRICK — brick by brick. Chain mode: live contracts on Robinhood Chain mainnet (4663). The 40-hex bio CA was not in the homepage HTML this pass." }
  - { id: R-18, publisher: FixTweet, title: "api.fxtwitter.com/brickswalltech", url: "https://api.fxtwitter.com/brickswalltech", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. name bricks. description includes 0x7b7faa885c237faba733e7006e80149ba9224643. website https://brickswall.tech/how-it-works. location Robinhood Chain. Runner-up, not primary." }
  - { id: R-19, publisher: FixTweet, title: "api.fxtwitter.com/ArcLiquidity", url: "https://api.fxtwitter.com/ArcLiquidity", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. screen_name ArcLiquidity name Arc. website https://arcliquidity.capital. Census slug arc. Reject as discovery." }
  - { id: R-20, publisher: RallyPad, title: "rallypad.fun", url: "https://rallypad.fun/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 200 effective https://www.rallypad.fun/. title RallyPad · Rally memecoin launchpad on Uniswap v4. No 40-hex CA in the HTML this pass. Not packed." }
  - { id: R-21, publisher: Hooded, title: "hooded.meme", url: "https://hooded.meme/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 200. title Hooded. Launchpad. Meta description names Robinhood Chain. Thin HTML shell. No 40-hex CA extracted. Not packed." }
  - { id: R-22, publisher: fefe-hood.fun, title: "fefe-hood.fun HTTP 502", url: "https://fefe-hood.fun/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTPS GET returned HTTP 502 and an empty body this pass. Not packed." }
  - { id: R-23, publisher: mintera.art, title: "mintera.art timeout", url: "https://mintera.art/", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTPS connection timed out after 25 seconds. No page body. Not packed." }
  - { id: R-24, publisher: FixTweet, title: "api.fxtwitter.com/fundedprotocol/tweets", url: "https://api.fxtwitter.com/fundedprotocol/tweets", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26], excerpt: "HTTP 404 body code 404 Not found. No dated @fundedprotocol status URL copied this round." }
  - { id: R-25, publisher: FixTweet, title: "follow-list profile sample api.fxtwitter.com/uponrh", url: "https://api.fxtwitter.com/uponrh", published_at: null, accessed_at: 2026-09-22T13:42:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25], excerpt: "Follow-list profile 200 bios only: uponrh native (3,3) exchange up33.xyz; deltaliquidity liquidity layer; ArrowFinanceio gateway for Robinhood DeFi; Hookrfun; whatthehookv4; ClutchMarkets; 0xSammy; graildoteth; SammyEth; dfarmer; mead. No status ids." }
  - { id: R-26, publisher: FixTweet, title: "api.fxtwitter.com/rallypadfun", url: "https://api.fxtwitter.com/rallypadfun", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. name Rally. description The programmable market layer for humans + agents. website http://rallypad.fun. No contract address in the bio. Not packed." }
  - { id: R-27, publisher: FixTweet, title: "api.fxtwitter.com/HoodedDotMeme", url: "https://api.fxtwitter.com/HoodedDotMeme", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. name Hooded.Meme. description Made by @SwapHoodFi; Hooded.Meme launchpad on Robinhood. website https://Hooded.Meme. No contract address in the bio. Not packed." }
  - { id: R-28, publisher: FixTweet, title: "api.fxtwitter.com/MinteraNFT", url: "https://api.fxtwitter.com/MinteraNFT", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. name Mintera - NFT Marketplace. description Maintaince. website null this pass. Not packed." }
  - { id: R-29, publisher: FixTweet, title: "api.fxtwitter.com/fefehood", url: "https://api.fxtwitter.com/fefehood", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "code 200. name Fefe Hood. description is a meme line and a Telegram link. website https://fefe-hood.fun/. No contract address in the bio. Site returned HTTP 502. Not packed." }
  - { id: R-30, publisher: FixTweet, title: "api.fxtwitter.com/ponsdotfamily", url: "https://api.fxtwitter.com/ponsdotfamily", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25], excerpt: "code 200. name Pons. description Launch coins on Robinhood via ponsfamily.com/launchpad. website https://ponsfamily.com/launchpad. Not empty this pass." }
  - { id: R-31, publisher: DefiLlama, title: "protocol/funded", url: "https://api.llama.fi/protocol/funded", published_at: null, accessed_at: 2026-09-22T13:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13], excerpt: "HTTP 400 body Protocol not found. No TVL attached." }

gaps:
  - { area: identity, priority: P0, question: "Does a later seed keep thenews.gg / @fundedprotocol distinct from census pons?", checked: "possible_matches recorded; census 182 slugs had no funded/thenews.gg/0x98af77 row; launch tx calls the Pons v2 router", next: "controller disposition before any funded census row; do not merge the launchpad and the launched token" }
  - { area: product, priority: P0, question: "Is TheNews already operating, or still the future first app in litepaper v0.1, and where is the Capital Pool contract?", checked: "homepage present tense versus litepaper will-be wording; PDF has no CA; CON-1 left open", next: "locate a pool or risk-engine address on 4663 before treating the capital layer as deployed" }
  - { area: deployment, priority: P1, question: "What 20-byte pool, if any, holds FUND, given DexScreener returned no pairs and GeckoTerminal returned a 32-byte pool id?", checked: "DexScreener three endpoints empty; GeckoTerminal pool id 0x1dc846…9123 is 32 bytes; not listed as a deployment", next: "do not treat the 32-byte id as a contract address; retry a pair index later" }
  - { area: control, priority: P1, question: "Does the launch sender 0xd3ee4540…848c or the Pons deployer have any admin power over FUND after owner() reverted?", checked: "owner() reverted; tx.from has no code; Blockscout creator_address_hash is the Pons v2 deployer; homepage names no timelock", next: "read verified PonsV2LauncherToken source for the deployer slot before assigning an admin" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches this FUND token or a Funded capital-pool contract?", checked: "thenews.gg, litepaper PDF, Pons token page, fundedprotocol.com, 2026-09-22; no report URL", next: "record any later report as a claim and match it to bytecode" }
  - { area: team, priority: P1, question: "Who operates thenews.gg and @fundedprotocol, and is there a repository?", checked: "site and handle cross-link; no GitHub link on the homepage, litepaper, or profile; tx.from not tied to a named person", next: "do not merge the launch sender with the site or handle without a signed or documented link" }
  - { area: economics, priority: P2, question: "Are the Pons UI market cap $2,936.73 and GeckoTerminal reserve about $3,739 the same pool, and is either protocol TVL?", checked: "Pons UI, GeckoTerminal, DexScreener empty, Llama not found, 2026-09-22", next: "keep third-party token figures separate from protocol TVL; do not attach a Llama number" }
  - { area: activity, priority: P2, question: "What is a real 24h volume window for FUND if GeckoTerminal h24 is 0 and DexScreener has no pair?", checked: "GeckoTerminal volume_usd.h24 0; DexScreener pairs []; holders_count 279 is a point count", next: "do not treat holders_count or a zero API volume as a seven-day activity window" }
  - { area: communications, priority: P1, question: "What dated @fundedprotocol status URLs exist?", checked: "fxtwitter profile 200; /tweets 404; signed-in X timeline scout blocked 2026-09-22; no status id copied", next: "copy a status id only from a page that was opened; do not invent one" }
---

# Discovery inventory 2026-09-22 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's lead is Funded Protocol. thenews.gg shows TheNews, simulated prediction challenges by Funded Protocol, and links the $FUND action to a Pons launchpad URL that contains 0x98af77d765465928062c1aBB28DC7A8c0366c13E. The @fundedprotocol bio names thenews.gg and does not include a contract address. RPC on chain 4663 reproduced an ERC-20 named FUNDED Protocol, symbol FUND, 18 decimals, total supply 1e9, and 3248 bytes of code. The homepage does not say Robinhood Chain. Census slug pons is the launchpad, not this token. Open discovery PRs #163-#169 are not packed again.

Themes: prediction-market, prop-firm, capital-pool, robinhood-chain, discovery

TL;DR: Funded Protocol token FUND is on chain 4663; thenews.gg does not name Robinhood Chain.

## Why it matters

- Homepage links $FUND to a Pons launchpad URL carrying the token address, and RPC reproduced FUND on chain 4663 [verified R-4] [claim R-1]
- July 2026 litepaper describes a stablecoin capital pool and a prediction-market prop firm called TheNews [claim R-5]
- Pons UI market cap was $2,936.73; GeckoTerminal FDV was about $2,872; DexScreener listed no pairs [claim R-6 R-10 R-12]

## What could go wrong

- Homepage HTML never says Robinhood Chain, so chain scope rests on the 4663 token, the Pons page, and a news article [claim R-1 R-6 R-13]
- Litepaper v0.1 still says TheNews will be the first app, while the homepage offers simulated challenges now [claim R-1 R-5]
- Pons and GeckoTerminal figures are third-party UI and API values, not protocol TVL, and Llama has no row [claim R-6 R-11 R-12]

## Product and mechanics

The homepage sells simulated prediction challenges: yes or no on news events, keep 80% of profits, and all accounts are 100% simulated. The July 2026 litepaper describes deposits of USDT or other stables into a Capital Pool, a Risk Engine, challenge fees that repurchase FUNDED tokens, and TheNews as a prediction-market prop firm. The PDF names no pool address. [claim R-1 R-5]

## Control and security

owner() on the FUND token reverted. Blockscout marks the contract verified and names it PonsV2LauncherToken. The launch transaction sender is 0xd3ee454010d4bb202445b9a09693858f2caa848c, an account with no code, matching the Pons page creator prefix. Blockscout's creator hash is the Pons v2 launch deployer, and the transaction calls the Pons v2 launch-and-buy router. thenews.gg names no timelock. No audit URL was located. [verified R-4 R-7 R-9]

## Team and provenance

thenews.gg and @fundedprotocol link to each other. The handle joined 16 July 2026. No repository URL was on the homepage, the litepaper, or the profile. The launch sender is not tied to a named person in these sources. [claim R-1 R-2]

## Economics and activity

At access, the Pons page showed market cap $2,936.73 and a Uniswap v4 label. GeckoTerminal showed FDV about $2,872.36, reserve about $3,738.77, and 24h volume 0, with market cap null. DexScreener returned no pairs. DefiLlama returned Protocol not found. Blockscout reported 279 holders. These are third-party point figures, not reproduced protocol TVL. [claim R-6 R-7 R-10 R-11 R-12]

## Material risks

- The product homepage does not name Robinhood Chain. [claim R-1]
- No audit URL was found on the site or the litepaper. [unknown]
- Third-party market figures are not protocol TVL, and no capital-pool contract was located. [claim R-5 R-11]

## Verification passes

- Receipts: the site, litepaper PDF, handle profile, Pons page, RPC, Blockscout API and transaction page, DexScreener, Llama, and GeckoTerminal were opened on 2026-09-22. [verified R-1 R-4 R-5 R-6 R-7]
- Numbers: market-cap and reserve figures are third-party point values for this token, not an all-chains protocol total. [claim R-6 R-12]
- Adversarial: the strongest contrary reading is that this is only a Pons launcher token and that TheNews is not a Robinhood Chain product because the homepage never says so. The homepage still links the Pons URL, and the token code is on chain 4663. That does not make Funded the same record as census pons. [inference R-1 R-4 R-6]

## Operations log

- Main SHA read before branching: 211271a1561ddd1a665dae1b5e2134c4f37b00ab (origin/main unchanged from the assignment base). Docs read: AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/research-system.md sections 4-7 and 10, docs/templates/research-packet-v2.md, docs/admission-policy.md, docs/taxonomy.md, schema/taxonomy.json, skills/research-seed/SKILL.md. Census 182 slugs. accounts.yaml @FundedProtocol is watch/project with no slug.
- Open PRs including drafts: #163 through #169 are prior discovery inventories and are not duplicated. #169 primary read this round is Scalar Liquidity. #163 arcus, #164 canopy, #165 twofold, #166 sluice, #167 mosaic, #168 greenwood stay on those PRs. Floor is already a census slug. ArcLiquidity is census slug arc. #92 is a site stream.
- candidates listed: 1
- Signed-in X timeline scout was blocked this round: no signed-in X browser in this run. api.fxtwitter.com/fundedprotocol/tweets returned HTTP 404. No status id was invented. Prior 16-21 September posts stay in older packets.
- Follow-list bios (fxtwitter 200, not dated posts): @uponrh native (3,3) exchange, up33.xyz; @deltaliquidity liquidity layer, deltaliquidity.app; @ArrowFinanceio gateway for Robinhood DeFi; @ponsdotfamily Launch coins on Robinhood via ponsfamily.com/launchpad (not empty this pass); @Hookrfun Hook Launchpad, hookr.fun; @whatthehookv4 MEV-in-hook, whatthehook.io; @ClutchMarkets StonkBrokers, stonkbrokers.io; @0xSammy, @graildoteth, @SammyEth, @dfarmer, @mead bios only (@SammyEth is not joined to a prior sammyeth spelling). Open-PR handles still present: @canopyfinance, @twofoldfi, @sluice_rh, @arcus_xyz, @MosaicETF, @GwoodFinance, @RVHProtocol, @scalarliquidity.
- Gap query: @fundedprotocol profile, thenews.gg, litepaper, Pons launchpad URL, and chain 4663 did not collapse to a census row or to #163-#169. Suggested later slug: funded (or funded-protocol). Inventory only. census.yaml was not written.
- Rejected this round (not packed as primary): (1) ArcLiquidity / @ArcLiquidity / arcliquidity.capital, census slug arc. (2) brickswalltech / @brickswalltech / brickswall.tech, bio CA 0x7b7faa885c237faba733e7006e80149ba9224643 exists on 4663 (name Bricks, symbol BRICKS, 3248 B, supply about 929182592.385); homepage names Robinhood Chain mainnet (4663) and does not print that CA. (3) rallypadfun / rallypad.fun, bio has no CA, site title is a Uniswap v4 memecoin launchpad, no 40-hex CA in the HTML. (4) MinteraNFT, bio Maintaince, profile website null, mintera.art timed out after 25s. (5) HoodedDotMeme / hooded.meme, bio has no CA, thin Launchpad page. (6) fefehood / fefe-hood.fun HTTP 502. (7) Scalar, Greenwood, Mosaic, Sluice, Twofold, Canopy, Arcus, Ravenhood, and Floor already packed or in the census.
- Surfaces opened: thenews.gg, /funded/litepaper (PDF), fundedprotocol.com, getfunded.xyz (302 to domains.atom.com then Cloudflare 403; sale copy not read), Pons launchpad page, api.fxtwitter.com profiles and fundedprotocol/tweets 404, DexScreener three endpoints (empty), Llama funded-protocol and funded (Protocol not found), GeckoTerminal token GET 200 (not 429 this pass), Blockscout api/v2 200 (not 403 this pass), Blockscout address and tx HTML 200, RPC https://rpc.mainnet.chain.robinhood.com, brickswall.tech, rallypad.fun, hooded.meme, fefe-hood.fun, mintera.art (timeout).
- Addresses checked on 4663: FUND 0x98af77d765465928062c1aBB28DC7A8c0366c13E exists_on_4663 true, explorer_source_verified true (Blockscout is_verified true, contract name PonsV2LauncherToken). CA source: official thenews.gg href embeds the address; X bio does not; RPC reproduced token metadata; DexScreener had no pair. Launch tx 0xe56d4e92502bd76dd3809d05c3202ed882572d01af0aa9468d65a29f6f1b8bed. GeckoTerminal pool id is 32 bytes and was not listed as a deployment. BRICKS 0x7b7faa885c237faba733e7006e80149ba9224643 exists, runner-up only.
- Candidate proposed: funded | Funded Protocol | @fundedprotocol | thenews.gg (coverage candidate; this file is inventory only).
- Rate limits and misses: signed-in X blocked; fxtwitter /tweets 404; getfunded.xyz atom landing blocked by Cloudflare 403; mintera.art timed out; GeckoTerminal returned 200 this pass; Blockscout API returned 200 this pass. Stop after this packet.
