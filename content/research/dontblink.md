---
slug: dontblink
coverage: stub
methodology_version: proofline-v1.0
---

# dontblink — research record

## Identity

dontblink is classified as Uniswap-pool launchpad.

A multi-mode token launchpad on Robinhood Chain. Classic mints a 1B-supply token into a locked Uniswap v3 1% pool in the same transaction; Pump Curve, Fair Drop and Celebrity Vault are additional modes, and stock-priced Classic pairs against any of 194 Robinhood stock tokens. Creators keep 50% of the 1% pool fee. Current comms are @dontblink_cto on dontblink.community; the original handle @dontblinkfamily remains a separate signer. $BLINK is the platform token.

Themes: launchpad, rwa, memecoin

## Deployment

v2 PortalProxy: 0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c on robinhood-chain. [verified S11 S15 S16 S19]

DontblinkPortal (EIP-1967 implementation): 0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD on robinhood-chain. [verified S11 S12 S16]

DontblinkPortal (JS bundle portalImpl): 0xf539aEa1d19689B5349Bb051F5DB18a455351C9c on robinhood-chain. [claim S16 S19]

$BLINK (dont blink): 0x7b630F080807DF83908b4aDE46BA6396EE66b098 on robinhood-chain. [verified S13 S14 S16 S17 S19]

V3LaunchpadGatedMax (v1 factory that created $BLINK): 0xF441cc979fa862f2674b9188A7b529caFd3ce204 on robinhood-chain. [claim S13 S14]

FairQueue: 0x7D6628e666EEA927C3bcFb38f83186523825706e on robinhood-chain. [claim S16 S19 S22]

SoftQuotaRouter: 0x40cDc7da1F54C0cF0411Dc5f74326Df202aD4853 on robinhood-chain. [claim S16 S19 S23]

Portal admin Safe: 0xefB0b09c66CB66943c1D5Ce796f5f577070de46e on robinhood-chain. [claim S16 S19 S25]

## Control

PortalProxy 0x7a4E…d59c is EIP-1967. Live implementation is DontblinkPortal 0x2CdA…27bD. `owner()` and the admin slot return Safe 0xefB0…e46e, threshold 2, three EOA owners. No timelock address was in the JS map this pass. [verified S11 S16 S25]

## Security

No audit report URL was located on the site, /docs, changelog, or the verified source pages. [unknown]

## Engineering

_Research pending._

## Team

dontblink.community sets twitter:site to @dontblink_cto. @dontblink_cto lists dontblink.community. Changelog tells readers to follow @dontblink_cto. [verified S1 S2 S4]

@dontblinkfamily is the original handle. Its bio still lists dontblink.family, which resolves to 0.0.0.0 this pass. On 17–18 Aug 2026 it posted that comms move to @dontblink_cto and that the legacy account is an archive. handle-collision; do not merge signers. [claim S5 S6 S20]

No public repository URL was located. Discord and Telegram URLs in the JS were not opened. [unknown]

## Product and economics

Classic is a 1B-supply single-sided Uniswap v3 1% pool with locked LP. Creators keep 50% of the 1% pool fee. Stock-priced Classic is the same pool quoted in a Robinhood stock token; v2.18 made that the first mode and named 194 verified stock tokens. [claim S1 S2 S3]

Pump Curve, Fair Drop and Celebrity Vault are additional modes in the shipped JS. Fair Drop is marked testing. Thesis Board (2 Sep) is a stock-thesis layer whose author share is not fully contract-enforced yet. [claim S3 S10]

$BLINK is labeled the platform coin in the JS and on DexScreener. It was created 9 Aug 2026 through V3LaunchpadGatedMax.launch as GatedMaxToken, not through v2 PortalProxy. [verified S13 S14 S19]

BLINK/WETH Uniswap v3 24h volume is 482965.87 USD and liquidity.usd 311242.91 at 2026-09-03T02:12Z. marketCap 2466926. Holders 3998. [claim S17] [verified S13]

ours.json lists 1102 tokens (v1 1044, instant 53, curve 3, queue 2). Those GeckoTerminal volumes are the site's own index, not a pad TVL. [claim S18]

## Communications

Thesis Board is live on dontblink [claim S10]

Stock-priced launches expanded to 194 RH stocks [claim S8]

v2.18 is live with stock-priced launches first [claim S2 S9]

@dontblinkfamily posted comms move to @dontblink_cto [claim S6 S7]

## Findings

PortalProxy is upgradeable. `owner()` and the EIP-1967 admin slot return a 2-of-3 Safe. The shipped JS still names an older DontblinkPortal implementation than the live slot. Original and current handles both remain online; they are separate signers. [claim S1]

- PortalProxy upgrades sit with a 2-of-3 Safe; no timelock was reproduced this pass. [verified S16]
- Shipped JS portalImpl 0xf539… lags the live EIP-1967 implementation 0x2CdA…. [verified S11 S19]
- Original @dontblinkfamily and current @dontblink_cto both remain online; dontblink.family does not serve. [claim S5 S6] [verified S20]
- Thesis author payouts are not fully contract-enforced yet, per the 2 Sep post. [claim S10]
- No audit report was located this pass. [unknown]

- Receipts: dontblink.community, /launch, /changelog, /docs, ours.json, the shipped JS, both X profiles and the cited posts, Blockscout portal/impl/token/create txs/FairQueue/SoftQuotaRouter/Safe, DexScreener, RPC, and family DNS were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S11 S16 S17]
- Numbers: 482965.87 is the BLINK/WETH Uniswap v3 24h volume, not an all-pads figure. Holders 3998 is the Blockscout token row. ours.json 1102 is the site's own token list. [claim S17 S18]
- Adversarial: the strongest contrary reading is that $BLINK 0x7b63… is a third-party listing. The shipped JS labels it the platform coin, DexScreener websites include dontblink.community and @dontblink_cto, and Blockscout name/symbol match; the create path is the v1 gated factory, not v2 PortalProxy. LONG remains a different factory. [inference S13 S17 S19]

## Sources

- S1 — dontblink homepage.
- S2 — What’s new · dontblink.
- S3 — Launch page and shipped JS modes.
- S4 — dontblink profile.
- S5 — dontblink original profile.
- S6 — CANONICAL COMMUNITY MIGRATION.
- S7 — FINAL TRANSITION NOTICE.
- S8 — Stock-priced launches just expanded.
- S9 — v2.18 is live.
- S10 — Thesis Board is live on dontblink.
- S11 — Address 0x7a4E…d59c PortalProxy.
- S12 — Address 0x2CdA…27bD DontblinkPortal.
- S13 — Token 0x7b63…b098 dont blink / BLINK.
- S14 — $BLINK create tx 0xc5f7396b….
- S15 — PortalProxy create tx 0xc71db52c….
- S16 — eth_getCode, EIP-1967, owner, Safe getOwners.
- S17 — BLINK token pairs on robinhood.
- S18 — ours.json launch index.
- S19 — Shipped JS address map and platform coin.
- S20 — dontblink.family A record.
- S22 — Address 0x7D66…706e FairQueue.
- S23 — Address 0x40cD…4853 SoftQuotaRouter.
- S25 — Address 0xefB0…e46e SafeProxy.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:25:00Z; methodology_version: proofline-v1.0.
