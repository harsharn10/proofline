import {readFile} from 'node:fs/promises';
import {parse} from 'yaml';
import {refreshReviewBasis,refreshReviewStatus} from './lib/refresh-review.mjs';
import {buildRelationships,relationshipIndex} from './lib/relationships.mjs';
import {readdir} from 'node:fs/promises';

// Inspect only: a controller edits the canonical optional field in a reviewed PR.
const [slug,...extra]=process.argv.slice(2);
if (!/^[a-z0-9-]+$/.test(slug??'') || extra.length) throw new Error('Usage: node scripts/refresh-review.mjs <canonical-slug>');
const yaml=async path=>parse(await readFile(path,'utf8'));
const rows=await yaml('content/census.yaml'), census=rows.find(r=>r.slug===slug);
if (!census) throw new Error('Unknown canonical slug');
const project=await yaml(`content/projects/${slug}.yaml`), ledger=await yaml(`content/sources/${slug}.yaml`);
const load=async dir=>Promise.all((await readdir(dir)).filter(f=>f.endsWith('.yaml')).map(f=>yaml(`${dir}/${f}`)));
const index=relationshipIndex(buildRelationships(await load('content/projects'),await load('content/dependencies')));
console.log(JSON.stringify({slug,checked_at:new Date().toISOString(),review:project.refresh_review??null,
  status:refreshReviewStatus({project,census,sources:ledger.sources,index}),
  current_basis:project.refresh_review?refreshReviewBasis(project,census,ledger.sources):null,
  instructions:'Read-only. Review receipts and exact identity first. To author a decision use the canonical field in docs/daily-registry.md; this command does not approve or queue work.'},null,2));
