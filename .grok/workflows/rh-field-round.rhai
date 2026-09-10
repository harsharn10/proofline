// Retired compatibility entrypoint. Do not spawn desks, fetch sources or begin another round.
let path = write_scratch_file("retired-field-round.md", "This looping field workflow is retired. Read AGENTS.md and docs/ingestion.md from current GitHub main, then the assigned skill under skills/. A bounded owner/controller assignment is required. No research or dispatch was performed.");
complete(#{ path: path, retired: true, dispatched: false });
