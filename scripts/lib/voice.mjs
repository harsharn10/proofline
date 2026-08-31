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
// "print"/"prints" is only banned when it is being used as market-cap-speak — i.e. followed by at most
// three words before "mcap", "market cap" or "FDV" (the trigger's first word may be the 1st, 2nd or 3rd
// token after print/prints; a trigger only reachable at the 4th token or later does not count).
const PRINT_TRIGGER_RE = /\b(mcap|market\s+cap|fdv)\b/i;

const wordRe = (word) => new RegExp(`\\b${word}\\b`, "i");
const phraseRe = (phrase) => new RegExp(`\\b${phrase.replace(/\s+/g, "\\s+")}\\b`, "i");

/**
 * Case-insensitive, whole-word scan of `text` for the banned-phrase list.
 * Returns human-readable warning strings prefixed with `where`; empty text yields no warnings.
 */
export function voiceWarnings(text, where) {
  if (!text) return [];
  const out = [];

  for (const word of BANNED_WORDS) if (wordRe(word).test(text)) out.push(`${where}: banned word "${word}"`);
  for (const phrase of BANNED_PHRASES) if (phraseRe(phrase).test(text)) out.push(`${where}: banned phrase "${phrase}"`);

  const tokens = text.split(/\s+/);
  tokens.forEach((tok, i) => {
    if (!/^prints?$/i.test(tok.replace(/[^\w]/g, ""))) return;
    // Exactly "at most three words before" the trigger: the next 3 tokens after print/prints, no more.
    const next = tokens.slice(i + 1, i + 4).join(" ");
    if (PRINT_TRIGGER_RE.test(next)) out.push(`${where}: banned phrase "${tok} … mcap/market cap/FDV"`);
  });

  return out;
}
