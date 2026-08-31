// Display-layer de-jargoning (redesign brief rule 3). Content files are the research
// record and stay untouched — these rewrites apply only at render time, where a string
// reaches a visitor. Each rule targets a phrase the brief names as internal jargon.
const REPLACEMENTS: Array<[RegExp, string]> = [
  [/\s*\(workbook sheet \d+\)/gi, ""],
  [/[Tt]he workbook records/g, "Proofline's intake notes record"],
  [/[Tt]he workbook's/g, "the intake notes'"],
  [/[Tt]he workbook/g, "the intake notes"],
  [/\(workbook\)/gi, "(intake notes)"],
  [/\bworkbook\b/g, "intake notes"],
  [/[Tt]he desk map/g, "Proofline's chain map"],
  [/[Tt]he desk's/g, "Proofline's"],
  [/[Tt]he desk/g, "Proofline"],
  [/chain-slice/gi, "chain-level"],
  [/\bgraduations\b/g, "graduated launches"],
];

export function dejargon(text: string): string {
  let out = text;
  for (const [re, sub] of REPLACEMENTS) out = out.replace(re, sub);
  return out.replace(/ {2,}/g, " ").replace(/ ([,.;:])/g, "$1");
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
