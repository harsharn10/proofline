import {addressKey,poolKey,buildRelationships,relationshipIndex,isOwnDeployment} from './relationships.mjs';
const validUsd=n=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
const https=s=>{try{return new URL(s).protocol==='https:';}catch{return false;}};

// A bounded projection over existing observations. No provider calls, ticker joins, new profiles,
// or invented issuer approval. Rialto per-leg estimates are never whole-pool or token totals.
export function stockPairIndex({projects=[],census=[],dependencies=[],files=[],now=Date.now(),limit=100}) {
  if(!Number.isFinite(now)||!Number.isInteger(limit)||limit<1||limit>100)throw new Error('Invalid pair projection bounds');
  const stock=dependencies.find(d=>d.id==='stock-tokens');
  const refs=stock?.deployments??[], accepted=new Map(), tickers=new Map();
  for(const d of refs){
    const key=addressKey(d.chain,d.address), receipts=(d.sources??[]).map(id=>stock.sources?.find(s=>s.id===id));
    if(d.chain!=='robinhood-chain'||!key||d.verified!==true||!d.ticker||!receipts.length||
      receipts.some(s=>!s||s.available!==true||!https(s.url)||!Number.isFinite(Date.parse(s.accessed_at))||Date.parse(s.accessed_at)>now))continue;
    if(accepted.has(key)&&accepted.get(key)===null)continue;
    if(accepted.has(key)&&accepted.get(key).ticker!==d.ticker){accepted.set(key,null);continue;}
    accepted.set(key,{ticker:d.ticker,address:d.address,sources:receipts.map(s=>({id:s.id,url:s.url}))});
    const keys=tickers.get(d.ticker)??new Set();keys.add(key);tickers.set(d.ticker,keys);
  }
  for(const [key,d]of accepted)if(!d||tickers.get(d.ticker).size!==1)accepted.delete(key);
  const graph=relationshipIndex(buildRelationships(projects,dependencies));
  const bySlug=new Map(projects.map(p=>[p.slug,p])), censusBySlug=new Map(census.map(c=>[c.slug,c]));
  const groups=new Map(),legClaims=new Map();let missingLegs=0,unreviewed=0;
  for(const file of files){
    const p=bySlug.get(file?.slug),c=censusBySlug.get(file?.slug),r=file?.market?.rialto;
    if(!p||!c||c.role==='observe'||c.identity?.status==='conflicted'||file.chain!=='robinhood-chain'||!r)continue;
    const subject=addressKey(file.chain,file.market.token_address);
    if(!(p.deployments??[]).some(d=>d.role==='token'&&addressKey(d.chain,d.address)===subject&&isOwnDeployment(p,d,graph)))continue;
    for(const pair of r.pairs??[]){
      const id=poolKey(file.chain,pair.pool_id),legs=[addressKey(file.chain,pair.base),addressKey(file.chain,pair.target)];
      if(!id||legs.some(k=>!k)||legs[0]===legs[1]||!legs.includes(subject)){missingLegs++;continue;}
      const claims=legClaims.get(id)??new Set();claims.add([...legs].sort().join('|'));legClaims.set(id,claims);
      const counter=legs.find(k=>k!==subject),ref=accepted.get(counter);
      if(!ref){unreviewed++;continue;}
      const at=Date.parse(r.as_of), source=https(r.source_url)?r.source_url:null;
      const row={id,pool:pair.pool_id,chain:file.chain,stock:ref.ticker,stockAddress:ref.address,
        slug:p.slug,name:p.name,tokenAddress:file.market.token_address,legs:legs.sort().join('|'),
        asOf:Number.isFinite(at)&&at<=now?r.as_of:null,
        state:r.stale_since||file.market.stale_since?'retained':!Number.isFinite(at)||at>now?'unknown':now-at>36*3600_000?'stale':'fresh',
        legVolumeUsd:Number.isFinite(at)&&at<=now&&validUsd(pair.volume_24h_usd)?pair.volume_24h_usd:null,source,
        referenceSources:ref.sources};
      const rows=groups.get(id)??[];rows.push(row);groups.set(id,rows);
    }
  }
  let conflicts=0;
  const rows=[];
  for(const variants of groups.values()){
    // A newer timestamp cannot silently resolve a pool identity disagreement.
    if(legClaims.get(variants[0].id).size!==1||new Set(variants.map(r=>`${r.legs}|${r.slug}`)).size!==1){conflicts++;continue;}
    const latest=Math.max(...variants.map(r=>Date.parse(r.asOf)||0));
    const same=variants.filter(r=>(Date.parse(r.asOf)||0)===latest).sort((a,b)=>String(a.source).localeCompare(String(b.source)));
    const row={...same[0]};delete row.legs;
    if(new Set(same.map(r=>r.legVolumeUsd)).size>1){row.legVolumeUsd=null;row.state='conflicting';conflicts++;}
    if(same.some(r=>r.state==='retained'))row.state='retained';
    if(!row.source){row.state='unknown';row.legVolumeUsd=null;}
    rows.push(row);
  }
  rows.sort((a,b)=>a.stock.localeCompare(b.stock)||a.name.localeCompare(b.name)||a.id.localeCompare(b.id));
  return {version:1,asOf:new Date(now).toISOString(),total:rows.length,rows:rows.slice(0,limit),
    reviewedStockAddresses:accepted.size,unreviewedStockAddresses:refs.length-accepted.size,
    omittedLegRows:missingLegs,unmatchedRows:unreviewed,conflicts,limit};
}
