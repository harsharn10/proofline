export const SECURITY_TESTS = {
  deployment_verifiability: 5,
  privileged_power: 8,
  authorization_topology: 5,
  timelock_exit_window: 5,
  audit_deployment_match: 5,
  continuous_safeguards: 4,
  incident_handling: 3,
};
export const SECURITY_MAX = Object.values(SECURITY_TESTS).reduce((a, b) => a + b, 0);
export const FACTOR_WEIGHTS = { security: 35, engineering: 20, transparency: 15, maturity: 15, economic: 15 };
export const RUBRIC = { strong: 80, mixed: 50, weak: 20 };
export const CONFIDENCE_WEIGHTS = {
  primary_source_coverage: 30,
  onchain_verification: 25,
  independent_corroboration: 20,
  freshness: 15,
  review_completeness: 10,
};
export const OVERRIDE_CAPS = { Critical: 29, High: 59, Elevated: null };
export const RISK_ORDER = ["Low", "Moderate", "Elevated", "High", "Critical"];
export const PENDING_LABEL = "Research pending / insufficient evidence";
export const PENDING_CONFIDENCE_CAP = 69;
export const UNAPPROVED_APPROVERS = new Set(["pending", "tbd", "none", "todo", "na", "n-a"]);
// Display thresholds (spec §6): below PROVISIONAL the number is hidden; below FULL_WEIGHT it shows as provisional.
export const PROVISIONAL_CONFIDENCE = 50;
export const FULL_WEIGHT_CONFIDENCE = 70;

const LEVEL_FRACTION = { full: 1, partial: 0.5, zero: 0 };

export function securityRaw(security) {
  if (!security) return null;
  let sum = 0;
  for (const [test, max] of Object.entries(SECURITY_TESTS)) {
    const level = security[test]?.level;
    if (typeof level !== "string" || !Object.hasOwn(LEVEL_FRACTION, level)) return null; // any missing test → unscored
    sum += max * LEVEL_FRACTION[level];
  }
  return sum;
}

export function factorPercents(scoring) {
  const raw = securityRaw(scoring?.security);
  const pct = (name) => {
    const level = scoring?.factors?.[name]?.level;
    return typeof level === "string" && Object.hasOwn(RUBRIC, level) ? RUBRIC[level] : null;
  };
  return {
    security: raw === null ? null : (raw / SECURITY_MAX) * 100,
    engineering: pct("engineering"),
    transparency: pct("transparency"),
    maturity: pct("maturity"),
    economic: pct("economic"),
  };
}

export function weightedScore(percents) {
  if (percents.security === null) return null; // security is mandatory
  let num = 0, den = 0;
  for (const [name, weight] of Object.entries(FACTOR_WEIGHTS)) {
    const p = percents[name];
    if (p === null || p === undefined) continue;
    num += weight * p;
    den += weight;
  }
  return den ? num / den : null;
}

export function confidence(inputs, approver) {
  if (!inputs) return null;
  let sum = 0;
  for (const [name, weight] of Object.entries(CONFIDENCE_WEIGHTS)) {
    const v = inputs[name];
    if (typeof v !== "number") return null;
    sum += (weight / 100) * v;
  }
  return UNAPPROVED_APPROVERS.has(approver) ? Math.min(sum, PENDING_CONFIDENCE_CAP) : sum;
}

export function applyOverride(score, override) {
  if (score === null || !override) return score;
  const cap = OVERRIDE_CAPS[override.level];
  return cap === null || cap === undefined ? score : Math.min(score, cap);
}

export function finalRisk(assessed, override) {
  const a = RISK_ORDER.indexOf(assessed);
  const o = override ? RISK_ORDER.indexOf(override.level) : -1;
  const idx = Math.max(a, o);
  return idx < 0 ? null : RISK_ORDER[idx];
}

const round = (x) => (x === null || x === undefined ? null : Math.round(x));

export function derive(project) {
  const base = {
    slug: project.slug,
    coverage: project.coverage,
    score: null, uncappedScore: null, provisional: false, label: PENDING_LABEL,
    confidence: null, risk: null, override: null, securityRaw: null,
    factorPercents: { security: null, engineering: null, transparency: null, maturity: null, economic: null },
    uncappedConfidence: null,
    trending: false, // derive() stays pure; scripts/score.mjs overwrites this from computeTrending()
  };
  if (project.coverage !== "full" || !project.scoring) return base;

  const s = project.scoring;
  const percents = factorPercents(s);
  const uncapped = weightedScore(percents);
  const conf = confidence(s.confidence, project.review?.approver);
  const uncappedConf = confidence(s.confidence, null);
  const override = s.override ? { level: s.override.level, reason: s.override.reason } : null;
  const capped = applyOverride(uncapped, override);
  const risk = finalRisk(s.risk?.assessed, override);
  const confR = round(conf);

  const out = {
    ...base,
    uncappedScore: round(uncapped),
    confidence: confR,
    risk,
    override,
    securityRaw: securityRaw(s.security),
    factorPercents: Object.fromEntries(Object.entries(percents).map(([k, v]) => [k, round(v)])),
    uncappedConfidence: round(uncappedConf),
  };
  if (capped === null || confR === null || confR < PROVISIONAL_CONFIDENCE) return out; // label stays pending
  return { ...out, score: round(capped), provisional: confR < FULL_WEIGHT_CONFIDENCE, label: null };
}

// Task A — category ranks. Priority order for the one basis a category ranks on; market_cap and holders are
// never eligible as a basis (display-only kinds for this task).
export const RANK_PRIORITY = ["tvl", "volume_24h", "fees_24h", "revenue_24h"];

/**
 * Within each census category, ranks the projects that carry a `metrics[]` value for the category's basis
 * kind — the highest-priority kind (RANK_PRIORITY order) that at least two projects in the category share.
 * A category with no such kind gets no ranks at all. Standard competition ranking: a tie shares the lower
 * position and the next distinct value skips ahead by the tie size (1,1,3 — never 1,2).
 *
 * @param {Array<{slug: string, category: string, metrics?: Array<{kind: string, value: number}>}>} projects
 * @returns {Map<string, {basis: string, position: number, of: number}>} slug -> rank, only for ranked projects
 */
export function computeRanks(projects) {
  const byCategory = new Map();
  for (const p of projects) {
    if (!p.metrics?.length) continue;
    if (!byCategory.has(p.category)) byCategory.set(p.category, []);
    byCategory.get(p.category).push(p);
  }

  const result = new Map();
  for (const members of byCategory.values()) {
    let basis = null;
    for (const kind of RANK_PRIORITY) {
      const count = members.filter((p) => p.metrics.some((m) => m.kind === kind)).length;
      if (count >= 2) { basis = kind; break; }
    }
    if (!basis) continue;

    const ranked = members
      .map((p) => ({ slug: p.slug, value: p.metrics.find((m) => m.kind === basis)?.value }))
      .filter((p) => p.value !== undefined)
      .sort((a, b) => b.value - a.value || a.slug.localeCompare(b.slug));
    const of = ranked.length;
    let position = 0, prevValue = null;
    ranked.forEach((p, i) => {
      if (p.value !== prevValue) position = i + 1;
      prevValue = p.value;
      result.set(p.slug, { basis, position, of });
    });
  }
  return result;
}
