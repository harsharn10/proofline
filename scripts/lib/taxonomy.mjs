// The one taxonomy, read from schema/taxonomy.json. Everything that needs a leaf label, a
// section, or a rank cohort goes through here — never a second hand-maintained table.
import { readFileSync } from "node:fs";

const TAXONOMY = JSON.parse(readFileSync(new URL("../../schema/taxonomy.json", import.meta.url), "utf8"));

export const LEAVES = TAXONOMY.leaves;
export const SECTIONS = TAXONOMY.sections;
export const LEAF_KEYS = Object.keys(LEAVES);

/** "launch/bonding-curve" -> "Bonding-curve launchpad". Unknown leaf -> null. */
export function leafLabel(leaf) {
  return LEAVES[leaf]?.label ?? null;
}

/** "launch/bonding-curve" -> "launch". */
export function domainOf(leaf) {
  return typeof leaf === "string" && leaf.includes("/") ? leaf.split("/")[0] : null;
}

/** The reader-facing section a leaf belongs to: leaf overrides first (Tokens), then domain. */
export function sectionForLeaf(leaf) {
  if (!leaf) return null;
  const byLeaf = SECTIONS.find((s) => (s.leaves ?? []).includes(leaf));
  if (byLeaf) return byLeaf;
  const domain = domainOf(leaf);
  return SECTIONS.find((s) => s.domains.includes(domain)) ?? null;
}

/** Rank cohort for a leaf: the section id, and its plural label for the rank line. */
export function cohortForLeaf(leaf) {
  const section = sectionForLeaf(leaf);
  if (!section) return null;
  return { id: section.id, label: section.label.toLowerCase() };
}
