import { createHash } from 'node:crypto';
import { addressKey, isOwnDeployment } from './relationships.mjs';

const DAY = 86_400_000;
const stable = value => JSON.stringify(value && typeof value === 'object'
  ? Array.isArray(value) ? value.map(v => JSON.parse(stable(v)))
    : Object.fromEntries(Object.keys(value).sort().filter(k => value[k] !== undefined).map(k => [k, JSON.parse(stable(value[k]))]))
  : value ?? null);

// Bind the decision to canonical identity AND the actual selected receipts, not copied URLs.
// Unrelated narrative/measurement changes do not invalidate an identity review.
export function refreshReviewBasis(project, census, sources = [], ids = project.refresh_review?.sources ?? []) {
  const sort = rows => [...rows].sort((a,b) => stable(a).localeCompare(stable(b)));
  const {basis: priorBasis, ...decision} = project.refresh_review ?? {};
  const basis = { slug: project.slug, identity: census?.identity, role: census?.role ?? 'subject',
    lifecycle: project.lifecycle, qualifying: census?.qualifying?.deployed_on_chain,
    links: sort(census?.official_links ?? []), deployments: sort(project.deployments ?? []),
    decision, sources: [...ids].sort().map(id => sources.find(s => s.id === id) ?? {id, missing:true}) };
  return createHash('sha256').update(stable(basis)).digest('hex');
}

export function refreshReviewStatus({project, census, sources = [], index, now = Date.now()}) {
  const review = project.refresh_review;
  if (!review) return {valid:false, community:false, stopped:false, reason:null};
  // Stops never expire into collection. Removing/replacing one is an explicit controller edit.
  const stopped = review.decision !== 'community';
  const invalid = reason => ({valid:false, community:false, stopped, reason:`refresh review: ${reason}`});
  if (!['community','stop'].includes(review.decision) ||
      !/^(?!(?:pending|tbd|none|todo)$)[a-z0-9-]+$/.test(review.reviewer ?? '') ||
      typeof review.reason !== 'string' || !review.reason.trim() || !Array.isArray(review.sources) ||
      !review.sources.length || new Set(review.sources).size !== review.sources.length)
    return invalid('invalid controller decision');
  const at=Date.parse(review.reviewed_at), end=Date.parse(review.expires_at);
  if (!Number.isFinite(at) || !Number.isFinite(end) || at > now || end <= at ||
      end-at > (stopped ? 90 : 30)*DAY || now >= end) return invalid('expired or invalid review window');
  const receipts=review.sources.map(id=>sources.find(s=>s.id===id));
  if (receipts.some(s=>!s || s.available!==true || !/^https:\/\//.test(s.url ?? '') ||
      !Number.isFinite(Date.parse(s.accessed_at)) || Date.parse(s.accessed_at)>at))
    return invalid('missing, unavailable or future receipt');
  if (review.basis !== refreshReviewBasis(project,census,sources)) return invalid('identity or source basis changed');
  if (stopped) return {valid:true,community:false,stopped:true,reason:`controller stop: ${review.reason}`};
  const key=addressKey(review.chain,review.address);
  if (census?.identity?.entity_kind!=='token' || review.chain!=='robinhood-chain' || !key ||
      !['provisional','verified'].includes(census?.identity?.status) || census?.role==='observe' ||
      !['mainnet','beta'].includes(project.lifecycle) || census?.qualifying?.deployed_on_chain?.value!==true ||
      !(project.deployments??[]).some(d=>d.role==='token' && d.verified===true && d.sources?.length &&
        addressKey(d.chain,d.address)===key && isOwnDeployment(project,d,index)))
    return invalid('not an eligible own-token deployment');
  if (new Set(receipts.map(s=>s.url)).size<2 || receipts.some(s=>at-Date.parse(s.accessed_at)>30*DAY) ||
      !receipts.some(s=>['social','announcement'].includes(s.kind)) ||
      !receipts.some(s=>['explorer','third-party-data'].includes(s.kind)) ||
      receipts.some(s=>!`${s.url} ${s.claim} ${s.excerpt}`.toLowerCase().includes(review.address.toLowerCase())))
    return invalid('community review needs recent exact-contract primary and corroborating receipts');
  return {valid:true,community:true,stopped:false,reason:'reviewed community identity (machine eligibility only)'};
}
