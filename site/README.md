# Proofline

Evidence-backed research on native Robinhood Chain plays.

## Stack

TanStack Start + React 19 + Tailwind v4 + Vite 8, deployed via Nitro (Vercel preset).

## Development

```sh
npm install
npm run dev        # http://localhost:8080
npm run typecheck
npm run build
```

## Structure

- `src/routes/` — file-based routes (`/`, `/n/$slug`)
- `src/components/` — `site-header`, `site-footer`, `dossier`, `name-row`, `feed-list`, `ui/`
- `src/data/` — name and chain data
- `src/styles.css` — design tokens (IBM Plex fonts, dark palette)
