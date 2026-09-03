# WORK-20260903-codex-icarus-1-shell: Icarus shell: brand, tokens, header, footer, shared components

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) building Icarus on github.com/harsharn10/proofline. The spec is docs/design/icarus/README.md and the visual spec is docs/design/icarus/mock.html (open it in a browser; hash routes #/, #/s/launchpads, #/t/artificial-inu, #/n/pons). Read both before touching code, then docs/research-system.md for the content contract. Where the mock and README disagree, README wins.

work_id: WORK-20260903-codex-icarus-1-shell
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-1-shell (already exists with this assignment file; commit to it, do not create another)
depends_on: none
allowed_paths:
  - content/site.yaml
  - schema/site.schema.json
  - site/src/styles.css
  - site/src/routes/__root.tsx
  - site/src/components/site-header.tsx
  - site/src/components/site-footer.tsx
  - site/src/components/theme-toggle.tsx
  - site/src/components/topbar-search.tsx
  - site/src/components/ui/**
  - site/src/data/types.ts (SiteConfig only)
  - site/package.json + package-lock.json (chart.js only)
  - site/public/** (favicon)

Rules that always apply (README §3): reader words only, every number links to its source, the share bar, no wallet labeling, charts from snapshots only, honest placeholders, build stays green. Do not change files outside allowed_paths; if you must, stop and say why in the PR.

Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run test, npm --prefix site run build all pass. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
- one line per change
## Screens
- attach screenshots of every changed page in light and dark (mobile width too)
## Not done / questions
- anything left, with the reason
Never merge, never enable auto-merge. A controller reviews with docs/design/icarus/review-checklist.md.

Task: rebrand the shell and build the shared pieces every later PR uses. Do not redesign index.tsx or n.$slug.tsx (PRs 2 and 3); they only pick up the new tokens, header and footer.

1. Brand. content/site.yaml: name "Icarus", title "Icarus: building the Robinhood Registry", tagline "Icarus researches and tracks what is new on Robinhood Chain and keeps you current here and on Telegram. Touch grass when it's quiet. Catch up fast when it's busy.", telegram.url (the public channel link; leave the value "TODO" if unknown and hide the button when TODO). Extend schema/site.schema.json and SiteConfig accordingly. __root.tsx: <title> and meta description from site.yaml; favicon = the feather mark from the mock as an SVG file in site/public.
2. Tokens. Replace the palette in site/src/styles.css with README §2 tokens (light on :root, dark under prefers-color-scheme guarded by :root:not([data-theme="light"]) and again under :root[data-theme="dark"]). Keep every existing class name that other components use working, restyled to the tokens; grep usages before removing anything.
3. Header per mock: ICARUS wordmark with the green mark, nav Registry (/), Feed (/feed), How to read this (/methodology) with the active green underline, the jump box (existing topbar-search restyled), a green Telegram pill, the theme toggle.
4. Footer: one line, "Every number links to its source on the profile. Status is computed from on-chain data, never typed. Research, not advice." plus a corrections link only when site.corrections.destination is not "TODO".
5. Shared components in site/src/components/ui/ (props typed, no page logic inside): Icon (inline SVG sprite from the mock: rocket, cat, tag, cal, drop, key, shield, users, flame, ext, check, msg, send, feather, trend, bell), StatusPill (live | quiet | dormant | announced | testnet + relative time), Badge (ok | warn | ctl), Tag (icon + label + value, optional href), MetricTile (label, value, sub), LinkPill (label, href, external flag), RankedList (rows with rank, name, why, value, change), SegmentedControl, DataTable styles, GrowthChart.
6. GrowthChart: chart.js (pin an exact version in site/package.json; register only the controllers, scales and elements used). Props: series [{key, label, type: "line" | "bar", points: [{at, value}], format}], window "7d" | "30d" | "90d", active key, onChange. Renders client-side only (SSR-safe wrapper); colors from the CSS tokens read at mount and re-read when data-theme changes; tooltip and axis ticks use the series format; when a series has fewer than 14 points, print "N snapshots since <date>" under the chart. Include a tiny fixture story or test page under site/src/routes/dev.chart.tsx ONLY if a dev-route pattern already exists; otherwise a unit test of the point-windowing helper is enough.
Acceptance: header, footer and colors changed on every page; no visible "Proofline" left in UI copy (the repo name stays); both themes readable; build green.
```
