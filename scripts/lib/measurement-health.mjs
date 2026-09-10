// A read-only projection. Neither execution/build time nor the last transaction dates a measurement.
import { REFRESH_POLICY, DAY } from './refresh-policy.mjs';
import { needsExplorerSignal } from './pull/tiers.mjs';
const finite = value => typeof value === 'number' && Number.isFinite(value);
const time = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) ? Date.parse(value) : null;
const own = (object,key,fallback) => object && Object.hasOwn(object,key) ? object[key] : fallback;

export function measurementState(component, now = Date.now()) {
  if (!component.measured) return 'unmeasured';
  const at = time(component.at);
  if (at === null) return 'undated';
  if (at > now) return 'future';
  if (component.retained) return 'retained';
  return now-at > REFRESH_POLICY.freshness ? 'stale' : 'fresh';
}

export function measurementComponents(file, now = Date.now()) {
  if (!file) return [];
  const out = [];
  const add = (key,at,measured,critical=false,retained=false) => out.push({key,at:at??null,measured:Boolean(measured),critical,retained:Boolean(retained)});
  const m=file.market, a=file.activity, s=file.structure;
  if (m) {
    add('market',m.pulled_at,['liquidity_usd','volume_h24','price_usd','trades_h24'].some(k=>finite(m[k])),true,m.stale_since);
    add('concentration',m.top10_as_of,finite(m.top10_share)||finite(m.top10_share_ex_pools));
    if (m.rialto) add('rialto',m.rialto.as_of,finite(m.rialto.volume_24h_usd));
  }
  if (a) {
    const at=own(a,'window_as_of',a.pulled_at);
    // The aggregate includes intentionally quiet contracts. Do not force all of them to refresh
    // merely to clear that aggregate's oldest clock; assess the current policy's dynamic rows.
    add('activity',at,finite(a.txns_24h)||finite(a.launches_24h),false,a.stale_since);
    for (const [i,row] of (a.addresses??[]).entries())
      add(`activity-row:${i}`,own(row,'window_as_of',at),finite(row.txns_24h)||finite(row.launches_24h),
        needsExplorerSignal({role:row.role,lastTxAt:row.last_tx_at,now}).signal,own(row,'stale_since',a.stale_since));
  }
  for (const [i,row] of (file.metrics??[]).entries()) add(`metric:${row.kind}:${i}`,row.as_of,finite(row.value),true);
  if (s) {
    add('mint',s.mint_as_of,['owner-can-mint','no-mint-function'].includes(s.mint));
    add('renounced',s.renounced_as_of,typeof s.renounced==='boolean');
    for (const [i,row] of (s.lp??[]).entries()) add(`lp:${i}`,row.as_of,finite(row.locked_share));
  }
  // Existing address facts do not have uniform measured-at metadata. Do not use file.pulled_at.
  for (const [i,row] of (file.addresses??[]).entries())
    add(`address-read:${i}`,null,row.is_contract!==null&&row.is_contract!==undefined);
  return out;
}

export function buildMeasurementManifest({files,plan,baseSha}) {
  const bySlug=new Map(files.map(file=>[file.slug,file]));
  const groups=['selected','deferred','not_due','ignored'];
  const projects=groups.flatMap(group=>(plan[group]??[]).map(row=>{
    const file=bySlug.get(row.slug);
    return {slug:row.slug,tier:group==='ignored'?null:row.tier,interval_days:group==='ignored'?null:row.intervalDays,selection:group,
      reason:row.reason,partial:file?.refresh?.status==='partial',
      last_success_at:file?.refresh ? file.refresh.last_success_at??null : file?.pulled_at??null,
      components:measurementComponents(file,Date.parse(plan.at))};
  })).sort((a,b)=>a.slug.localeCompare(b.slug));
  if (new Set(projects.map(p=>p.slug)).size!==projects.length) throw new Error('Duplicate planner membership');
  const manifest={version:1,base_sha:baseSha,generated_at:plan.at,projects,
    limits:['Measurement ages are evaluated separately from collection cadence and build time.',
      'Unknown address/legacy field dates stay unknown; not every field is expected to change daily.',
      'Ignored identities and archived names remain visible but do not trigger forced collection.',
      'A manifest contains existing observations, not new provider verification.']};
  manifest.summary=assessMeasurements(manifest,Date.parse(plan.at)).summary;
  return manifest;
}

export function assessMeasurements(manifest, now = Date.now()) {
  if (!Number.isFinite(now) || manifest?.version!==1 || !/^[a-f0-9]{40}$/.test(manifest.base_sha??'') ||
      time(manifest.generated_at)===null || !Array.isArray(manifest.projects) || !manifest.projects.length || manifest.projects.length>10_000)
    throw new Error('Invalid measurement manifest');
  const slugs=new Set(), attention=[], summary={projects:manifest.projects.length,ignored:0,partial:0,
    fresh:0,stale:0,retained:0,undated:0,unmeasured:0,future:0};
  for (const p of manifest.projects) {
    const ignored=p.selection==='ignored';
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug??'') || slugs.has(p.slug) ||
        (ignored ? p.tier!==null||p.interval_days!==null :
          !['hot','live','quiet','dormant'].includes(p.tier)||!finite(p.interval_days)||p.interval_days!==REFRESH_POLICY[p.tier]/DAY) ||
        !['selected','deferred','not_due','ignored'].includes(p.selection) ||
        typeof p.partial!=='boolean' || !Array.isArray(p.components) || p.components.length>2000)
      throw new Error('Invalid measurement project or planner membership');
    slugs.add(p.slug);
    const issues=[], keys=new Set();
    if (ignored) summary.ignored++;
    if (p.partial) { summary.partial++; if(!ignored) issues.push('last collection was partial'); }
    const last=time(p.last_success_at);
    if (!ignored) {
      if (last===null) issues.push('no successful collection on file');
      else if (last>now) issues.push('last-success date is in the future');
      else if (now-last>(p.interval_days+Math.max(7,p.interval_days))*DAY) issues.push('collection exceeds tier grace');
    }
    for (const c of p.components) {
      if (typeof c.key!=='string' || !c.key || keys.has(c.key) ||
          (c.at!==null&&typeof c.at!=='string') || ['measured','retained','critical'].some(key=>typeof c[key]!=='boolean'))
        throw new Error('Invalid measurement component');
      keys.add(c.key);
      const state=measurementState(c,now); summary[state]++;
      if (!ignored && (state==='future' || p.tier==='hot'&&c.critical&&state!=='fresh')) issues.push(`${c.key}: ${state}`);
    }
    if (!ignored && p.tier==='hot' && !p.components.some(c=>c.critical)) issues.push('no daily measurements on file');
    if (issues.length) attention.push({slug:p.slug,issues});
  }
  return {healthy:attention.length===0,summary,attention};
}
