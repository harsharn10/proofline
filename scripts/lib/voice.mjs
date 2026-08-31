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

// Conduct verdicts about people or accounts. Only applied to `accounts[].note` (a "yield farm" in project
// prose is fine; "farm" about an account is an accusation). A note describes observable behaviour —
// "handle collides with the official @X; posts not used as evidence" — never conduct.
const CONDUCT_WORDS = ["drainer", "drainers", "impersonator", "impersonators", "impersonation", "farm", "farms", "farmed", "scammer", "scammers", "scam", "scams", "insider", "insiders", "fraud", "fraudulent", "malicious", "phishing", "shady", "sketchy"];

/** Whole-word, case-insensitive scan for conduct words; use on account notes only. */
export function conductWarnings(text, where) {
  if (!text) return [];
  return CONDUCT_WORDS.filter((w) => wordRe(w).test(text)).map((w) => `${where}: conduct word "${w}"`);
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
