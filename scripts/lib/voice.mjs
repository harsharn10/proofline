// Banned-phrase list (case-insensitive, whole word). Hype/slang words that read as promotion rather than
// research; see Global Constraints in the site-integration plan and README "Evidence tags and language".
const BANNED_WORDS = [
  "ape", "aped", "aping",
  "casino",
  "rug", "rugged", "rugs",
  "moon", "mooning",
  "shill", "shilled", "shilling",
  "bag", "bags",
  "degen", "degens",
  "giga",
  "vapor",
];
const BANNED_PHRASES = ["send it"];
// "print"/"prints" is only banned when it is being used as market-cap-speak: the trigger word, then
// between zero and three whitespace-separated words, then "mcap" / "market cap" / "FDV".
const PRINT_NEAR_TRIGGER_RE = /\bprints?\b(?:\s+\S+){0,3}\s+(?:mcap|market\s+cap|fdv)\b/i;

const wordRe = (word) => new RegExp(`\\b${word}\\b`, "i");
const phraseRe = (phrase) => new RegExp(`\\b${phrase.replace(/\s+/g, "\\s+")}\\b`, "i");

// Conduct verdicts about people, teams or accounts — the verdict nouns. Applied everywhere the site renders
// prose about named parties: account notes, feed titles/bodies, findings text and summaries (final review
// C3: these files sit on the intake path, so a hit is an error, never a warning). Whole-word and
// deliberately short so ordinary protocol prose ("yield farm", "phishing-resistant") never trips it.
// Prose describes observable behaviour — "an address with the same ticker at a different address",
// "the account posted a link to a domain that is not the project's" — never intent or identity.
const CONDUCT_WORDS = ["drainer", "drainers", "scammer", "scammers", "scam", "impersonator", "impersonators", "fraud", "fraudster", "insider", "honeypot", "ponzi"];
const CONDUCT_PHRASES = ["same person as"];
// Words that are an accusation when written about an account but ordinary in protocol prose ("runs farms"
// vs "a yield farm"); applied to `accounts[].note` only, on top of the list above (fix round 1 ruling E).
const NOTE_CONDUCT_WORDS = ["impersonation", "farm", "farms", "farmed", "scams", "insiders", "fraudulent", "malicious", "phishing", "shady", "sketchy"];

/**
 * Whole-word, case-insensitive scan for conduct verdicts. Pass `{ note: true }` for an account note to
 * add the note-only words.
 */
export function conductWarnings(text, where, { note = false } = {}) {
  if (!text) return [];
  const words = note ? [...CONDUCT_WORDS, ...NOTE_CONDUCT_WORDS] : CONDUCT_WORDS;
  const out = words.filter((w) => wordRe(w).test(text)).map((w) => `${where}: conduct word "${w}"`);
  for (const phrase of CONDUCT_PHRASES) if (phraseRe(phrase).test(text)) out.push(`${where}: conduct phrase "${phrase}"`);
  return out;
}

/**
 * Case-insensitive, whole-word scan of `text` for the banned-phrase list.
 * Returns human-readable warning strings prefixed with `where`; empty text yields no warnings.
 */
export function voiceWarnings(text, where) {
  if (!text) return [];
  const out = [];

  for (const word of BANNED_WORDS) if (wordRe(word).test(text)) out.push(`${where}: banned word "${word}"`);
  for (const phrase of BANNED_PHRASES) if (phraseRe(phrase).test(text)) out.push(`${where}: banned phrase "${phrase}"`);
  if (PRINT_NEAR_TRIGGER_RE.test(text)) out.push(`${where}: banned phrase "print/prints … mcap/market cap/FDV"`);

  return out;
}
