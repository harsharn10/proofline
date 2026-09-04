# Robinhood Trenches activity

Icarus reads the public Robinhood Trenches tape at
`https://robinhoodtrenches.com/api/tape?limit=120&stocks=true`. The website server reads it at most
once every ten minutes with a two-second timeout; `TRENCHES_API_URL` can point the server at a
compatible endpoint. A failed read keeps the last good in-memory result and never blocks the home
page.

## Product boundary

This is project context, not a wallet-tracking product. Before a row reaches the browser, the server:

- requires an empty source `flags` array, a valid token address, a priced trade of at least $250 and
  an age under 24 hours;
- removes wallet addresses and follower counts;
- matches the token address to a token deployment already attached to an Icarus dossier;
- drops every unmatched token and sends at most eight matched rows to the home page, with only the
  newest qualifying row per covered asset.

The compact **In the trenches** module attributes the source and shows direction, token, dollar size,
trader handle, age and transaction/chart links. It does not label a wallet “smart money,” infer
intent, score a trader or create a new dossier from an identity guess.

## Research trigger, not Telegram trigger

The Pulse Worker does not read this source. Individual trades, wallet clusters and trader handles
are not Pulse signal kinds and cannot produce Telegram messages.

The six-hour standing research order reads a larger bounded tape during discovery. One clean trade
of at least $25,000 on an unknown token with at least $25,000 reported liquidity makes the token a
research-priority lead for that cycle. Leads are deduplicated by token address. The collector then
researches the project behind the token through the normal packet and evidence process; it does not
publish the wallet movement itself. Only a later, contextualized project event that independently
meets the channel rules can reach Telegram.
