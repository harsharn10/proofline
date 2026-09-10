// Research metrics are latest observations by kind. An older/repeated packet must not roll them back.
export function measurementUpdateErrors(incoming, previous = [], { requireChange = true } = {}) {
  const errors = [];
  let changed = false;
  for (const metric of incoming) {
    const old = previous.find(row => row.kind === metric.kind);
    const nextAt = Date.parse(metric.as_of);
    if (!Number.isFinite(nextAt)) { errors.push(`measurement ${metric.kind}: missing actual measurement date`); continue; }
    if (!old) { changed = true; continue; }
    const oldAt = Date.parse(old.as_of);
    if (Number.isFinite(oldAt) && nextAt < oldAt) { errors.push(`measurement ${metric.kind}: older than the accepted observation`); continue; }
    const value = row => JSON.stringify([row.value, row.currency ?? null, row.window ?? null]);
    if (nextAt === oldAt && value(metric) !== value(old)) errors.push(`measurement ${metric.kind}: conflicting value/window at the same date requires a sourced correction`);
    else if (nextAt !== oldAt || value(metric) !== value(old)) changed = true;
  }
  if (requireChange && !changed && !errors.length) errors.push('No new measurement: unchanged observations are not another research update');
  return errors;
}
