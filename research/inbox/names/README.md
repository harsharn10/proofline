# Standardized name intake

One candidate per `<slug>.yaml`. Start from
[`docs/templates/name-intake.yaml`](../../../docs/templates/name-intake.yaml); every YAML file here is
validated by `npm run validate` against `schema/name-intake.schema.json` and the canonical census.

This directory is an intake queue, not the public database. A controller resolves identity matches
and conflicts before copying an accepted name into `content/census.yaml`. Never overwrite or merge a
candidate because its display name or ticker resembles an existing row.
