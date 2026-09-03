---
slug: incel
coverage: stub
methodology_version: proofline-v1.0
---

# INCEL — research record

## Identity

INCEL is classified as Stock-paired token.

A one-billion-initial-supply ERC-20 cloned into a Uniswap v4 pool quoted against INTC. LongLauncher.create from 0x37e771…0DfB minted Incel Inside (INCEL) on 2026-07-22T13:20:04Z into pool 0x11de…aef0 via DopplerERC20V1Factory and Airlock. Traders buy and sell INCEL against the Intel Robinhood Token. incelinside.com displays the CA. DexScreener lists @incelrh without a bidirectional official-crosslink from the handle back to the site.

Themes: memecoin, stock-paired:INTC, rwa

## Deployment

INCEL token (EIP-1167 DopplerERC20V1 clone): 0x12d834F0780c367909319c73f42310Dc0b201E18 on robinhood-chain. [verified S1 S5 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (create() target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S13]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S6 S14]

INTC Intel • Robinhood Token (pair quote / numeraire): 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681 on robinhood-chain. [verified S11 S12]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0x37e771…0DfB has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0xEDeAa0…eDa8, not the Airlock owner. [verified S6 S15]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, LongLauncher, and DopplerHookInitializer are verified on Blockscout (compiler v0.8.26; several are partially verified). No audit report URL was located this pass. [verified S2 S3 S13 S14 S22] [unknown]

## Engineering

_Research pending._

## Team

incelinside.com titles Incel Inside, displays CA 0x12d834…1E18, and links @incelrh plus app.long.xyz. DexScreener info.websites matches. Gecko token info websites [] and twitter_handle null. @incelrh bio pins the CA and $INTC via @longdotxyz without naming the site. Flag unconfirmed-official. tokenURI IPFS social_links is empty; fee_receiver is the launcher EOA. [claim S7 S10 S16 S17 S18]

## Product and economics

LongLauncher 0x22e9…eeED create() from 0x37e771…0DfB at 2026-07-22T13:20:04Z minted Incel Inside / INCEL supply 1e9*1e18 into Uniswap v4 poolId 0x11de…aef0 quoted against INTC. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. Live totalSupply is 992030772001344029565566192. [verified S4 S5 S6 S15]

Secondary INCEL/USDG and INCEL/ETH books exist on DexScreener with far less liquidity than the INTC book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified S7 S8]

INCEL/INTC Uniswap v4 24h volume is 462081.70 USD and reserve_in_usd is 260739.34 at 2026-09-03T04:25:00Z from the Gecko pool endpoint. fdv_usd is 804587.25. Gecko token volume_usd.h24 is 487324.12 across all pools, not the INTC book. [claim S8 S9]

DexScreener same pair: liquidity.usd 216898.35, volume.h24 493022.97, fdv/marketCap 759153. Blockscout holders_count 759. Pair created 2026-07-22T13:20:04Z. [claim S1 S7]

## Communications

Third-party posts pushed netlify claim URLs for $INCEL [claim S20]

@ghostdotenv called $INCEL an original @longdotxyz ticker [claim S19]

@incelrh posted Never doubt yourself $incel [claim S17]

Third-party post pushed a netlify vote URL for $INCEL [claim S24]

## Findings

USD liquidity figures on the INCEL/INTC book count both sides, and the quote side is INTC, not USDG. Many same-ticker INCEL tokens exist on 4663, including PonsLauncherToken Incel Inside 0xb93d…0E41. @incelrh is unconfirmed-official. Netlify claim and vote URLs that embed the CA are third-party-link / copypasta-pattern. [claim S18]

- Quote token INTC 0xc72b…9681 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is INCEL plus INTC, not a USDG backstop. [verified S11 S12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified S4 S8 S23]
- @incelrh is unconfirmed-official; the handle does not name incelinside.com this pass. [claim S17 S18]
- Same-ticker clones including PonsLauncherToken Incel Inside 0xb93d…0E41. Flag ca-collision. [claim S21]
- Netlify claim and vote URLs that embed the CA. Flag copypasta-pattern | third-party-link. [claim S20 S24]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/INTC and create tx 0xbfc332…fc96, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/info, /rhj/assets, IPFS tokenURI, incelinside.com, @incelrh, @ghostdotenv, Bankr launches, the Pons same-name token, and the netlify claim/vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11 S18]
- Numbers: 462081.70 is the Gecko INCEL/INTC pool 24h volume, not the 487324.12 token all-pools figure. Reserve 260739.34 is that pool. DexScreener 493022.97 / 216898.35 is the same pair, different aggregator. Live RPC totalSupply is 9.920e26, not Gecko token 1e27. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that INCEL is a Bankr-official or Intel-official product. Create is LongLauncher, Bankr API latest 50 has no row, INTC is the rhj/assets rail, and the site is incelinside.com not intel.com. [inference S4 S11 S18 S23]

## Sources

- S1 — Token 0x12d834…1E18 Incel Inside / INCEL.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0xbfc332f4…fc96.
- S5 — eth_getCode, name, symbol, owner() on INCEL.
- S6 — isPoolLocked, pool(), tokenURI, Airlock owner().
- S7 — latest/dex/tokens INCEL.
- S8 — INCEL/INTC pool (dex bankr-robinhood).
- S9 — Incel Inside token.
- S10 — INCEL token info.
- S11 — GET /rhj/assets INTC Stock Token.
- S12 — Token 0xc72b…9681 Intel • Robinhood Token / INTC.
- S13 — LongLauncher 0x22e9…eeED.
- S14 — Airlock 0xeb7C…0862.
- S15 — LaunchCreated / Initialize / Lock logs on create tx.
- S16 — tokenURI metadata bafkreibeok3mky2bdyuidgc2e4akarfyulr3bxukxgn3ank5a266mech3i.
- S17 — Never doubt yourself $incel.
- S18 — incelinside.com homepage.
- S19 — The other avenger is $INCEL.
- S20 — $INCEL had an event live claim URL.
- S21 — PonsLauncherToken Incel Inside 0xb93d…0E41.
- S22 — DopplerHookInitializer 0x4e34…a544.
- S23 — GET token-launches latest 50.
- S24 — $INCEL Robinhood Top 100 vote URL.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
