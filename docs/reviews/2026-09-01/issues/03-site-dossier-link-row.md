# Site: the dossier link row does not scale to 15 contracts

labels: site

On `/n/pons` the Overview renders one chip per `deployments[]` entry, 15 chips reading
`explorer · vault`, `explorer · other`, `explorer · factory`, which tells the reader nothing. Two chips
both read `docs` because Pons has a v1 and a v2 docs link.

Note: the 2026-09-01 site decisions (review §5.3) replace the project page header and link row. Check
the rebuilt dossier before doing this work; if the new header already meets the spec below, close.

## Spec

1. At most 5 explorer chips on the Overview. Order: `token`, then `factory`, `router`, `vault`,
   `multisig`, then everything else, preserving file order inside a role. Chip label = the text inside
   the parentheses of `label` when present (`PonsLaunchFactory`), else the first three words of
   `label`. Tooltip = the full label.
2. More than 5: append one chip `+N contracts` that switches to the Evidence tab and scrolls to the
   deployments grid.
3. Official-link chips that share a `kind` are disambiguated by the last path segment of the URL
   (`docs · v2`), never by repeating the kind.
4. Mobile (480px and below): the existing horizontal scroll for `.chips` stays.

No `content/` or schema change. Done when typecheck, build and smoke are clean and screenshots of
`/n/pons` at 1280 and 390 wide show at most 6 explorer chips and distinct docs chips.
Commit: `site: cap the dossier link row and name explorer chips`.
