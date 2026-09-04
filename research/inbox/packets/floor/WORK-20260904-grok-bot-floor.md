---
contract_version: proofline-research-v2
work_id: WORK-20260904-grok-bot-floor
producer: grok-bot
role: collector
base_sha: 3f3d81b914547440ef0ea19aba49ae9d597eeb18
slug: floor
name: Floor
packet_tier: seed
as_of: 2026-09-04T13:45:00Z
prior_packet: null
owned_slugs: [floor]
allowed_paths:
  - research/inbox/packets/floor/WORK-20260904-grok-bot-floor.md
identity:
  canonical_name: Floor
  aliases: ["floorfi"]
  symbols: ["FLR", "FLOOR"]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://floorfi.app
  official_handle: "@Floor_fi"
  repository: "NULL — floorfi.app and floorfi.app/docs listed no GitHub org or repository path this round"
  possible_matches:
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is @TheIndexFi / theindex.finance with token 0x56910D4409F3a0C78C64DD8D0545FF0705389870 (RPC name The Index, symbol Index)"
        - "Floor is @Floor_fi / floorfi.app with token 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d (RPC name FLOOR, symbol FLR)"
        - "No shared official handle, domain, or reproduced address"
        - "Official Floor page compares its 3% total trade cost to The Index as a different product"
classification:
  primary_leaf: rwa-products/tax-distributor
  secondary_leaves: [yield/savings-vault]
  mechanism_tags: [rwa, vault, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Official site describes a 2% creator tax on $FLR trades that buys tokenized equities, split between holder claims and a redeemable floor. RPC this round reproduced the FLOOR/FLR ERC-20, a vault whose token() returns that address, and a distributor, all on chain 4663. Explorer API v2 was Cloudflare 403 so explorer_source_verified stays null. DefiLlama has a Robinhood Chain TVL figure and no Floor protocol row. Distinct from The Index. [R-1] [R-3] [R-6] [R-7] [R-8] [R-10]"
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-3, CLM-4, CLM-5], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-2], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-7], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
links:
  - { kind: site, url: "https://floorfi.app", authenticity: confirmed }
  - { kind: docs, url: "https://floorfi.app/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Floor_fi", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/floorrobinhood", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x8aD25c65587979533fa1cA0d2194A76D5bAE305d", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x2a526d2b957a6f58ba5bf796cd966fe1de4269fb80ad654c313f9c603bf2c1c5", authenticity: unconfirmed }
deployments:
  - label: $FLR token (RPC name FLOOR, symbol FLR, ERC-20)
    role: token
    address:
      value: "0x8aD25c65587979533fa1cA0d2194A76D5bAE305d"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-3, R-12]
  - label: Site-labeled FLOOR Vault
    role: vault
    address:
      value: "0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-4, R-12]
  - label: Site-labeled FLOOR Distributor
    role: other
    address:
      value: "0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-04
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-5, R-12]
metrics:
  - { kind: volume_24h, value: 63839.74, currency: USD, as_of: 2026-09-04T13:31:19Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x8aD25c65587979533fa1cA0d2194A76D5bAE305d volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 113309, currency: USD, as_of: 2026-09-04T13:31:19Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x8aD25c65587979533fa1cA0d2194A76D5bAE305d marketCap", class: claim, receipt_ids: [R-6] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T13:32:00Z, receipt_ids: [R-3, R-12], result: "eth_getCode at 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d non-empty (6498 hex chars) at block 54302899. eth_call name() returns FLOOR, symbol() returns FLR, decimals() returns 18, totalSupply() returns 1000000000000000000000000000 (1,000,000,000 * 10^18). owner() reverted. Blockscout HTML title lists this address on Robinhood Chain; API v2 returned Cloudflare 403." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T13:33:00Z, receipt_ids: [R-4, R-12], result: "eth_getCode at 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71 non-empty (27908 hex chars). token() (0xfc0c546a) returns 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d. owner() returns 0xe1ea1bc285a49293fb75490fa0e3f497d04302a5. eth_getCode on that owner is empty (EOA)." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T13:33:00Z, receipt_ids: [R-5, R-12], result: "eth_getCode at 0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479 non-empty (8886 hex chars). owner() returns 0xe1ea1bc285a49293fb75490fa0e3f497d04302a5, the same EOA as the vault. name()/symbol() reverted." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-04T13:33:00Z, receipt_ids: [R-10], result: "Census Index token 0x56910D4409F3a0C78C64DD8D0545FF0705389870: eth_getCode non-empty (5554 hex chars), name() The Index, symbol() Index, owner() 0x02d9e763154977e2aae47a3a61d940ffe0238fd0. Address, name, symbol, and owner differ from the Floor token, vault, and distributor." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-04T13:31:19Z, receipt_ids: [R-7, R-8], result: "api.llama.fi/v2/chains listed name Robinhood Chain chainId 4663 tvl 843651445.0001884. api.llama.fi/protocols listed 141 rows whose chains include Robinhood Chain, and no row whose name or slug is Floor, Floor Fi, or floorfi. Hits for Flooring Protocol / Floor Dao / Flare are other chains or the Flare network ticker FLR." }
claims:
  - { id: CLM-1, field: product.mechanism, value: "Official site says every $FLR trade sends creator fees to a treasury that buys tokenized equities on-chain; half is set aside for holders to claim and half backs a redeemable floor. It states a 2% creator tax on top of the Pons 1% pool fee (3% total), Pons v2 launch, and that claiming does not burn tokens.", class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://floorfi.app", class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0x8aD25c65587979533fa1cA0d2194A76D5bAE305d", class: verified, observed_at: 2026-09-04T13:32:00Z, receipt_ids: [R-1, R-3, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71", class: verified, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-1, R-4, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479", class: verified, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-3, R-4, R-5, R-12], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "@Floor_fi", class: claim, observed_at: 2026-09-04T13:31:00Z, receipt_ids: [R-1, R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: FLR, class: verified, observed_at: 2026-09-04T13:32:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: FLOOR, class: verified, observed_at: 2026-09-04T13:32:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0xe1ea1bc285a49293fb75490fa0e3f497d04302a5", class: verified, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Site copy and RPC totalSupply agree on 1,000,000,000 FLR (18 decimals). Token owner() reverted, so a single-key ERC-20 owner was not read.", class: verified, observed_at: 2026-09-04T13:32:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DefiLlama has no Floor protocol row on Robinhood Chain as of 2026-09-04; tokens existing is not a protocol TVL row. Chain-slice TVL 843651445.0001884 USD is not a Floor figure.", class: verified, observed_at: 2026-09-04T13:31:19Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener Uniswap v4 pair base FLOOR/FLR quote Ether, volume.h24 63839.74 USD, liquidity.usd 33166.8, marketCap 113309, pairCreatedAt 2026-08-18T20:29:34Z, websites floorfi.app, socials x.com/Floor_fi and t.me/floorrobinhood", class: claim, observed_at: 2026-09-04T13:31:19Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Floor is not census index: different handle, domain, token address, token name, and token owner", class: verified, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Site contracts list labels CASHCAT 0x020bfC650A365f8BB26819deAAbF3E21291018b4 and PONS 0x39dbed3a2bd333467115de45665cc57f813c4571 as basket assets. Those strings match census cashcat and pons token addresses. They are not Floor's token. Not filed as Floor deployments.", class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Homepage hero states no staking and no lockup. A later on-page section labeled The Vault describes 7-day, 15-day, and 30-day locks with 2x, 3x, and 5x reward multipliers.", class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Homepage basket weights (NVDA 15, AAPL 15, TSLA 5, GOOGL 10, GLD 20, SPY 10, MSTR 5, INTC 5, QQQ 5, CASHCAT 10) differ from the on-page 'Supported assets' table dated 25 August 2026 (NVIDIA 12.5, Apple 12.5, Google 10, SpaceX 10, Gold 10, S&P 500 10, MSTR 5, DJT 10, Cash Cat 10, Pons 10).", class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report, bounty page, or repository was located on floorfi.app or floorfi.app/docs this round", class: unknown, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@Floor_fi.role", value: project, class: claim, observed_at: 2026-09-04T13:31:00Z, receipt_ids: [R-1, R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@Floor_fi.follow", value: true, class: claim, observed_at: 2026-09-04T13:31:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@Floor_fi.listen", value: high, class: claim, observed_at: 2026-09-04T13:33:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: "account.@Floor_fi.slug", value: floor, class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@Floor_fi.conflict", value: team, class: claim, observed_at: 2026-09-04T13:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "X Latest for @Floor_fi and the follow-list handles (@graildoteth, @0xSammy, @OGDfarmer, @MEADGod, plus official project handles) was not readable this round: x.com returned HTTP 200 with no post bodies; jina.ai 403 (AbuseAlleviationError until 2026-09-04 14:09:56Z); syndication.twitter.com 429. No tweet ids, dates, or claims were filed. Handle is taken from the official site, DexScreener socials, and content/accounts.yaml.", class: unknown, observed_at: 2026-09-04T13:31:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "Signed-in X scout intake, 2026-08-24 https://x.com/Floor_fi/status/2092127246320328809: trade fees route to tokenized-stock rewards (NVDA, AAPL, GLD named); CASHCAT and PONS pools; site https://floorfi.app. This environment's X path still returned no post bodies. Does not change the RPC reproductions in REP-1–REP-3.", class: claim, observed_at: 2026-09-04T14:04:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-1, CLM-16]
    material_effect: "Homepage copy says there is no staking and no lockup; a later on-page vault section describes timed locks that multiply rewards. Which path is live changes how holders receive the equity split."
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-1, CLM-17]
    material_effect: "Two on-page basket tables disagree on assets and weights (homepage vs the 25 August 2026 'Supported assets' table). Holder claims and floor redemption depend on which basket the contracts actually buy."
    status: open
    resolution: null
events:
  - id: EVT-1
    type: onchain
    title: "FLOOR/FLR ERC-20 exists on chain 4663"
    summary: "RPC at block 54302899 returned non-empty code at 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d. name() FLOOR, symbol() FLR, decimals 18, totalSupply 1,000,000,000 * 10^18. Official site publishes this address as the $FLR contract on Robinhood Chain 4663. Blockscout HTML title confirms the address page; API v2 was Cloudflare 403."
    account: null
    occurred_at: 2026-08-18T20:29:34Z
    observed_at: 2026-09-04T13:32:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-3, R-6, R-12]
  - id: EVT-2
    type: onchain
    title: "FLOOR Vault token() returns the FLR token"
    summary: "RPC returned non-empty code at site-labeled vault 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71. token() returned 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d. owner() returned EOA 0xe1ea1bc285a49293fb75490fa0e3f497d04302a5, the same owner() as the site-labeled distributor."
    account: null
    occurred_at: 2026-09-04T13:33:00Z
    observed_at: 2026-09-04T13:33:00Z
    affected_fields: [deployment.address, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-4, R-5]
  - id: EVT-3
    type: company
    title: "Site publishes $FLR tax-to-equities mechanism and CAs"
    summary: "floorfi.app states that every $FLR trade sends creator fees to a treasury that buys tokenized equities, half for holders and half as floor. It publishes token 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d, FLOOR Vault 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71, and FLOOR Distributor 0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479 on chain 4663, and links https://x.com/Floor_fi."
    account: "@Floor_fi"
    occurred_at: 2026-09-04T13:30:00Z
    observed_at: 2026-09-04T13:30:00Z
    affected_fields: [product.mechanism, deployment.address, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-1]
  - id: EVT-4
    type: company
    title: "Floor_fi: fees to tokenized-stock rewards"
    summary: "Signed-in X scout intake of https://x.com/Floor_fi/status/2092127246320328809 (2026-08-24): fees route to tokenized-stock rewards; NVDA, AAPL, and GLD named; CASHCAT and PONS pools; URL https://floorfi.app. This environment did not recover the post body. Strengthens the site mechanism in CLM-1 without changing RPC findings."
    account: "@Floor_fi"
    occurred_at: 2026-08-24T00:00:00Z
    observed_at: 2026-09-04T14:04:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
receipts:
  - { id: R-1, publisher: Floor, title: "Official site floorfi.app", url: "https://floorfi.app", published_at: null, accessed_at: 2026-09-04T13:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-7, CLM-8, CLM-11, CLM-14, CLM-15, CLM-16, CLM-17, CLM-19, CLM-20, CLM-21, CLM-22, CLM-23, EVT-1, EVT-2, EVT-3], excerpt: "Every trade on $FLR sends its creator fees to a treasury that buys tokenized equities on-chain. Half is set aside for holders, half becomes a floor under the token. Contract 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d. FLOOR Vault 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71. FLOOR Distributor 0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479. Chain Robinhood Chain · 4663." }
  - { id: R-2, publisher: Floor, title: "floorfi.app/docs", url: "https://floorfi.app/docs", published_at: null, accessed_at: 2026-09-04T13:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "HTTP 200. Same Floor SPA as the homepage; contracts, Pons v2 launch copy, and basket tables are served from this origin. No separate GitHub path was listed." }
  - { id: R-3, publisher: Blockscout, title: "FLR token 0x8aD25c65…", url: "https://robinhoodchain.blockscout.com/address/0x8aD25c65587979533fa1cA0d2194A76D5bAE305d", published_at: null, accessed_at: 2026-09-04T13:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-6, CLM-8, CLM-9, CLM-11, CLM-14, EVT-1], excerpt: "HTML title: Robinhood Chain address details for 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d | Blockscout. HTTP 200. API v2 Cloudflare 403 this round. RPC name FLOOR symbol FLR decimals 18 totalSupply 1000000000000000000000000000, code 6498 hex chars, block 54302899." }
  - { id: R-4, publisher: Blockscout, title: "FLOOR Vault 0xEf9Cb105…", url: "https://robinhoodchain.blockscout.com/address/0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71", published_at: null, accessed_at: 2026-09-04T13:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-10, EVT-2], excerpt: "HTML title: Robinhood Chain address details for 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71 | Blockscout. HTTP 200. API v2 Cloudflare 403. RPC eth_getCode 27908 hex chars; token() returns 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d; owner() 0xe1ea1bc285a49293fb75490fa0e3f497d04302a5." }
  - { id: R-5, publisher: Blockscout, title: "FLOOR Distributor 0xc2f799fF…", url: "https://robinhoodchain.blockscout.com/address/0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479", published_at: null, accessed_at: 2026-09-04T13:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-10, EVT-2], excerpt: "HTML title: Robinhood Chain address details for 0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479 | Blockscout. HTTP 200. API v2 Cloudflare 403. RPC eth_getCode 8886 hex chars; owner() 0xe1ea1bc285a49293fb75490fa0e3f497d04302a5." }
  - { id: R-6, publisher: DexScreener, title: "FLOOR/ETH Uniswap v4 pair on Robinhood", url: "https://dexscreener.com/robinhood/0x2a526d2b957a6f58ba5bf796cd966fe1de4269fb80ad654c313f9c603bf2c1c5", published_at: null, accessed_at: 2026-09-04T13:31:19Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-7, CLM-13, CLM-19, CLM-20, EVT-1], excerpt: "api.dexscreener.com/token-pairs/v1/robinhood/0x8aD25c65587979533fa1cA0d2194A76D5bAE305d: uniswap v4, base FLOOR/FLR, quote Ether, volume.h24 63839.74, liquidity.usd 33166.8, marketCap 113309, pairCreatedAt 1787084974000 (2026-08-18T20:29:34Z), websites https://floorfi.app, socials https://x.com/Floor_fi and https://t.me/floorrobinhood." }
  - { id: R-7, publisher: DefiLlama, title: "Chains API Robinhood Chain TVL", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-04T13:31:19Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Row name Robinhood Chain, chainId 4663, tvl 843651445.0001884 as of this request. Chain TVL is not a Floor protocol figure." }
  - { id: R-8, publisher: DefiLlama, title: "Protocols API, Robinhood Chain slice", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-04T13:31:19Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, CLM-14], excerpt: "141 protocol rows listed Robinhood Chain among chains. No Floor, Floor Fi, or floorfi row. Flooring Protocol, Floor Dao, and Flare (ticker FLR) are other names or other chains." }
  - { id: R-9, publisher: "X", title: "@Floor_fi profile", url: "https://x.com/Floor_fi", published_at: null, accessed_at: 2026-09-04T13:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-19], excerpt: "Profile URL returned HTTP 200. Post bodies, status ids, and post dates were not recovered this round (jina.ai 403 AbuseAlleviationError until 2026-09-04 14:09:56Z; syndication.twitter.com 429)." }
  - { id: R-10, publisher: RPC, title: "Index token collision check on chain 4663", url: "https://robinhoodchain.blockscout.com/address/0x56910D4409F3a0C78C64DD8D0545FF0705389870", published_at: null, accessed_at: 2026-09-04T13:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "RPC name() The Index, symbol() Index, owner() 0x02d9e763154977e2aae47a3a61d940ffe0238fd0, code 5554 hex chars. Distinct from Floor token 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d." }
  - { id: R-11, publisher: "X", title: "Follow-list Latest attempt", url: "https://x.com/graildoteth", published_at: null, accessed_at: 2026-09-04T13:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7], excerpt: "x.com/graildoteth, x.com/0xSammy, x.com/OGDfarmer, x.com/MEADGod, x.com/ArcLiquidity, x.com/sluice_rh, x.com/HoodedDotMeme, x.com/ArrowFinanceio, x.com/MancerXYZ each HTTP 200 with no post bodies recovered." }
  - { id: R-12, publisher: "Robinhood Chain RPC", title: "eth_getCode / eth_call on chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-04T13:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-6, EVT-1, EVT-2], excerpt: "JSON-RPC eth_blockNumber 0x33c98b3 (54302899). eth_getCode non-empty on FLR token, FLOOR Vault, and FLOOR Distributor. name/symbol/totalSupply and vault token() as recorded in REP-1 REP-2 REP-3." }
  - { id: R-13, publisher: "@Floor_fi", title: "status/2092127246320328809 fees to tokenized-stock rewards", url: "https://x.com/Floor_fi/status/2092127246320328809", published_at: 2026-08-24, accessed_at: 2026-09-04T14:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-4], excerpt: "Signed-in X scout intake 2026-09-04. This environment HTTP 200 with no post body. Paraphrase: fees route to tokenized-stock rewards; NVDA, AAPL, GLD named; CASHCAT and PONS pools; https://floorfi.app. Does not rewrite RPC findings in REP-1–REP-3." }
gaps:
  - { priority: P0, question: "Can owner() on the vault and distributor change the basket, keeper, or payout path without a timelock?", checked: "owner() returned a single EOA on vault and distributor; token owner() reverted; explorer source flag unread because API v2 was 403, 2026-09-04", next: "Read verified source if it appears, or eth_call the basket/keeper setters and record the access modifier" }
  - { priority: P0, question: "Which on-page basket table matches balances held by the treasury contracts?", checked: "Homepage weights and the 25 August 2026 Supported assets table disagree; RPC this round did not read treasury balances per asset", next: "eth_call balances of the listed NVDA/AAPL/… addresses on the vault or treasury holder and compare to both tables" }
  - { priority: P1, question: "X Latest from @Floor_fi and the accounts.yaml follow list this window?", checked: "This environment: x.com HTTP 200 without post bodies; jina 403; syndication 429. Signed-in scout intake added one dated post 2026-08-24 status/2092127246320328809 as R-13/CLM-25. Other Latest still unread here.", next: "Re-run Latest on @Floor_fi, @graildoteth, @0xSammy, @OGDfarmer, @MEADGod when this environment can read post bodies" }
  - { priority: P1, question: "Is the timed-lock vault live, unused, or only documentation?", checked: "Homepage says no lockup; later section describes 7/15/30 day locks; vault contract exists and token() returns FLR", next: "Read vault lock/unstake selectors and any staked supply" }
  - { priority: P2, question: "Is there a DefiLlama protocol row or GitHub org still missing?", checked: "api.llama.fi/protocols 2026-09-04 no Floor row; site listed no GitHub path", next: "Watch Llama listings and any repository link the official pages add" }
---

## What it is

Floor is a Pons-graduated token on Robinhood Chain. The official site says a 2% creator tax on $FLR trades buys a basket of tokenized equities, with half claimable by holders and half held as a redeemable floor. The site publishes the token, vault, and distributor addresses on chain 4663. RPC this round reproduced the FLOOR/FLR ERC-20 and a vault whose token() returns that address. Distinct from The Index.

Themes: rwa, vault, fee-routing, tax-distributor, pons

TL;DR: Pons-graduated $FLR on chain 4663: a 2% trade tax is stated to buy tokenized equities; token, vault, and distributor contracts exist [CLM-1 CLM-3 CLM-4].

## Why it matters

- Thesis: a native tax-to-equities distributor on chain 4663, with published addresses, is a different machine from The Index. [claim R-1] [verified R-3 R-10]
- Traction: token, vault, and distributor have non-empty code on 4663; DexScreener 24h volume about $63.8k on 2026-09-04. [verified R-3 R-4 R-5] [claim R-6]
- Catalyst: still off the public census after the 2026-08-31 candidate; this packet is the seed for slug floor. [claim R-1] [verified R-3]

## What could go wrong

- `owner()` on the vault and distributor is one externally owned account; explorer source was not flagged because Blockscout API v2 returned 403. [verified R-4 R-5]
- Homepage copy says no lockup while a later vault section describes timed locks that multiply rewards. [claim R-1]
- Two on-page basket tables disagree on assets and weights, so the live treasury split is unread. [claim R-1]

## Operations log

- 2026-09-04: grok-bot field desk. Gap hunted: Floor / `@Floor_fi` (on accounts, off census). X Latest closed (no post bodies; jina 403; syndication 429). Official site + /docs + RPC `https://rpc.mainnet.chain.robinhood.com` + Blockscout HTML (API v2 403) + DefiLlama chains/protocols + DexScreener token-pairs. Standing hunts not re-opened on X. Candidate slug `floor` proposed for compiler census intake. Did not write `content/census.yaml` or `content/accounts.yaml`.
- 2026-09-04 follow-up (same branch): additive R-13 / CLM-25 / EVT-4 from signed-in scout post 2026-08-24 `https://x.com/Floor_fi/status/2092127246320328809` (fees to tokenized-stock rewards; NVDA/AAPL/GLD; CASHCAT and PONS pools). RPC reproductions unchanged. Arc seed packet filed at `research/inbox/packets/arc/WORK-20260904-grok-bot-arc.md`.
