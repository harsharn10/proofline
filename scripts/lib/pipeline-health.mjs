const HOUR = 3600_000;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const strings = value => Array.isArray(value) && value.every(item => typeof item === 'string' && item.length > 0);

export function compileDisposition(report) {
  if (report.dry) return 'dry-run';
  if (report.ok !== true) return 'failed';
  const blocked = (report.branches ?? []).some(branch => (branch.skipped ?? []).length > 0) || (report.preexistingErrors ?? []).length > 0;
  const changed = (report.compiled ?? []).length > 0 || (report.inventory ?? []).length > 0;
  return blocked ? changed ? 'partial' : 'blocked' : changed ? 'complete' : 'no-change';
}

export function assessRun(run, now = Date.now(), { requireSuccess = true } = {}) {
  if (!object(run) || !Number.isSafeInteger(run.databaseId) || run.databaseId <= 0) return ['No scheduled run found'];
  const age = now - Date.parse(run.createdAt);
  const errors = [];
  if (!Number.isFinite(age) || age < 0 || age > 36*HOUR) errors.push('Scheduled run is missing a valid timestamp or older than 36 hours');
  if (run.status !== 'completed' || (requireSuccess && run.conclusion !== 'success')) errors.push(`Latest scheduled run is ${run.status}/${run.conclusion || 'pending'}`);
  if (run.event !== 'schedule') errors.push('A manual/narrow run is not proof of the scheduled daily cycle');
  return errors;
}

export function assessReceipt(kind, run, receipt, now = Date.now()) {
  if (!object(receipt) || receipt.version !== 1 || receipt.kind !== kind ||
      receipt.run_id !== run.databaseId || receipt.run_attempt !== run.attempt ||
      !Number.isSafeInteger(run.attempt) || run.attempt < 1 ||
      receipt.event !== 'schedule' || receipt.trigger_sha !== run.headSha ||
      !/^[a-f0-9]{40}$/.test(receipt.trigger_sha ?? '') ||
      !/^[a-f0-9]{40}$/.test(receipt.workspace_sha ?? '') ||
      !['success','failure','cancelled'].includes(receipt.result) || !reportTime(receipt.at,run,now))
    return ['Lane receipt does not match this scheduled run, attempt, revision or time'];
  return [];
}

function reportTime(at, run, now) {
  const time = Date.parse(at);
  return Number.isFinite(time) && time >= Date.parse(run.createdAt)-5*60_000 && time <= now && now-time <= 36*HOUR;
}

export function assessReport(kind, run, report, plan, now = Date.now()) {
  const errors = assessRun(run,now), notes = [];
  if (!object(report)) return { healthy:false, state:'missing-report', errors:[...errors,'Missing or malformed report'], notes };
  if (!reportTime(kind === 'pull' ? report.at : report.generated_at,run,now)) errors.push('Report timestamp does not match a recent run');
  let state = 'invalid-report';
  if (kind === 'pull') {
    const arrays = ['completed','deferred_names','deferred_reads','failures','run_errors'];
    if (!arrays.every(key => Array.isArray(report[key])) || !object(report.budget) ||
        !Number.isInteger(report.selected) || report.selected < 0 || !strings(report.completed) ||
        !strings(report.deferred_names) || !strings(report.deferred_reads) ||
        !object(plan) || !Array.isArray(plan.selected) || !Array.isArray(plan.deferred) ||
        !reportTime(plan.at,run,now) || !['complete','degraded'].includes(report.status)) {
      errors.push('Pull report or selection plan has an invalid shape');
    } else {
      const selected = plan.selected.map(row => row?.slug), deferred = plan.deferred.map(row => row?.slug);
      if (!strings(selected) || !strings(deferred) || new Set(selected).size !== selected.length || new Set(deferred).size !== deferred.length ||
          deferred.some(slug => selected.includes(slug)) || new Set(report.completed).size !== report.completed.length ||
          report.selected !== selected.length || selected.length !== report.completed.length ||
          selected.some(slug => !report.completed.includes(slug))) errors.push('Selected names did not all complete exactly once');
      if (report.failures.length || report.run_errors.length || report.deferred_reads.length || report.budget.provider_exhausted !== false) errors.push('Selected collection failed, deferred reads or exhausted the provider');
      const onlyPlannedDeferrals = report.deferred_names.length === deferred.length &&
        new Set(report.deferred_names).size === deferred.length && report.deferred_names.every(slug => deferred.includes(slug));
      if (!onlyPlannedDeferrals) errors.push('Some selected names were not reached');
      if (report.status === 'degraded' && !deferred.length) errors.push('Pull reported unexplained degradation');
      state = deferred.length ? 'complete-with-backlog' : 'complete';
      if (deferred.length) notes.push(`${deferred.length} intentionally deferred due names remain; not all registry entries refresh daily`);
      for (const row of plan.deferred) {
        const age = now-Date.parse(row.lastSuccessAt);
        if (Number.isFinite(age) && Number.isFinite(row.intervalDays) && row.intervalDays > 0 &&
            age > (row.intervalDays + Math.max(7,row.intervalDays))*24*HOUR) {
          errors.push(`Deferred name ${row.slug} is overdue beyond its tier grace`);
        }
      }
    }
  } else if (kind === 'compile') {
    if (!Array.isArray(report.branches) || !report.branches.every(branch => object(branch) && Array.isArray(branch.skipped)) ||
        !Array.isArray(report.compiled) || !Array.isArray(report.preexistingErrors) || !object(report.gates) ||
        report.gates.validate?.ok !== true || report.gates.score?.ok !== true || typeof report.dry !== 'boolean') {
      errors.push('Compiler report has missing or failed gates');
    } else {
      state = compileDisposition(report);
      if (report.status !== undefined && report.status !== state) errors.push('Compiler status contradicts its contents');
      if (!['complete','no-change'].includes(state)) errors.push(`Compiler outcome requires attention: ${state}`);
    }
  } else errors.push('Unknown pipeline');
  return { healthy:errors.length===0, state:errors.length ? 'unhealthy' : state, errors, notes };
}

export function selectReportArtifact(response, name) {
  if (!object(response) || !Array.isArray(response.artifacts)) throw new Error('Malformed artifact listing');
  const matches = response.artifacts.filter(artifact => artifact.name === name);
  if (matches.length !== 1) throw new Error('Required report artifact is missing or ambiguous');
  const artifact = matches[0];
  if (artifact.expired !== false || !Number.isSafeInteger(artifact.size_in_bytes) || artifact.size_in_bytes <= 0 || artifact.size_in_bytes > 5_000_000) throw new Error('Report artifact is expired or outside size bounds');
  return artifact;
}
