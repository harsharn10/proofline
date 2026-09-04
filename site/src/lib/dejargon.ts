// Display-layer de-jargoning (redesign brief rule 3). Content files are the research
// record and stay untouched — these rewrites apply only at render time, where a string
// reaches a visitor. Each rule targets a phrase the brief names as internal jargon.
const REPLACEMENTS: Array<[RegExp, string]> = [
  [/\s*\(workbook sheet \d+\)/gi, ""],
  [/[Tt]he workbook records/g, "Icarus's intake notes record"],
  [/[Tt]he workbook's/g, "the intake notes'"],
  [/[Tt]he workbook/g, "the intake notes"],
  [/\(workbook\)/gi, "(intake notes)"],
  [/\bworkbook\b/g, "intake notes"],
  [/[Tt]he desk map/g, "Icarus's chain map"],
  [/[Tt]he desk's/g, "Icarus's"],
  [/[Tt]he desk/g, "Icarus"],
  [/[Dd]esk auditor/g, "Icarus auditor"],
  [/chain-slice/gi, "chain-level"],
  [/\bgraduations\b/g, "graduated launches"],
];

export function dejargon(text: string): string {
  let out = text;
  for (const [re, sub] of REPLACEMENTS) out = out.replace(re, sub);
  return out.replace(/ {2,}/g, " ").replace(/ ([,.;:])/g, "$1");
}

// The vocabulary map (Icarus spec §3 rule 1): the content system's own words, rewritten for a
// reader. Order matters — the longer phrase always precedes the word it contains.
const READER_WORDS: Array<[RegExp, string]> = [
  [/\bProofline\b/g, "Icarus"],
  [/\bresearch packets?\b/gi, "research"],
  [/\bpackets?\b/gi, "research"],
  [/\bdossiers?\b/gi, "research"],
  [/\bcensus\b/gi, "registry"],
  [/\bcoverage\b/gi, "review"],
  [/\bInitial stub opened\b/g, "First profile opened"],
  [/\bstub\b/gi, "short profile"],
  [/\bprovisional\b/gi, "awaiting second review"],
  [/\bconfidence\b/gi, "evidence"],
  [/\bderived\b/gi, "calculated"],
  [/\bcohort\b/gi, "section"],
  [/\bqualifying\b/gi, "listing"],
];

// The one reader pass. Every visible string that comes out of a content file goes through this
// on its way to the page — home, the category table, the card and the feed all call it, so a
// word can never be de-jargoned on one surface and left raw on another.
export function readerCopy(text: string): string {
  let out = dejargon(text);
  for (const [re, sub] of READER_WORDS) out = out.replace(re, sub);
  // Markdown inline-code marks are packet notation. The compiler strips them, but a hand-edited
  // content file can still carry them and a reader must never see `owner()` with its backticks.
  return out.replace(/`+/g, "");
}

// Deployment labels carry internal parentheticals ("(workbook sheet 02)", "(posted by
// the project 30 Aug)"). The caveat lives in the `claimed` badge next to the address
// instead (brief rule 1), so labels render without their trailing parenthetical.
export function cleanLabel(label: string): string {
  return dejargon(label.replace(/\s*\([^)]*\)\s*$/, "")).trim();
}

// "0x39dBED3a…C4571" — middle truncation for addresses; short strings pass through.
export function shortAddress(address: string): string {
  if (address.length <= 14) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

// Receipt label for a bare URL: its host, no www.
export function hostLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
