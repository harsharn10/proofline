Subject: Partner API access for Icarus (Robinhood Chain research registry)

Hi Robinscan team,

I run Icarus (https://proofline-892b.onrender.com), a research registry for Robinhood Chain: 180 names on file, each with an evidence-backed profile, live on-chain numbers refreshed every six hours, and a Telegram channel for launches and control changes. Everything we publish links back to its source, and we do not label wallets.

Your partner API covers exactly the reads we do most (token holders, token risk, verified contracts, the tokenized-stock registry, address transfers) and does them in one call where we currently walk Blockscout page by page. I would like to request partner credentials.

What we would do with it: refresh holders, concentration and contract data for the registry every six hours (about 1,100 addresses today), read the stock registry once a day, and credit Robinscan as the source on every figure we show from it, with a link back. Expected load is well under your default 50 requests per second; a few thousand requests per day.

Happy to share the repo's data model and pull cadence, or to run a trial under whatever limits you prefer.

Thanks,
Harsharn Singh
harsharn.singh10@gmail.com
