// Add only compiler-owned metadata from packets already accepted on the pinned main SHA.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { parseDocument, parse } from 'yaml';
import { parsePacket } from './lib/packet.mjs';
import { nextResearchState } from './lib/research-state.mjs';

const [base, mode] = process.argv.slice(2);
if (!/^[a-f0-9]{40}$/.test(base ?? '') || !['--check','--write'].includes(mode) || process.argv.length !== 4)
  throw new Error('Usage: migrate-research-state.mjs <accepted-main-sha> --check|--write');
const git = args => execFileSync('git', args, {encoding:'utf8',maxBuffer:32*1024*1024});
git(['merge-base','--is-ancestor',base,'origin/main']);
// Never derive from pending branch packets or overwrite unrelated local/canonical edits.
git(['diff','--exit-code',base,'--','research/inbox/packets']);
const paths=git(['ls-tree','-r','--name-only',base,'research/inbox/packets']).trim().split('\n').filter(p=>p.endsWith('.md'));
const states=new Map();
for(const path of paths) {
  const f=parsePacket(git(['show',`${base}:${path}`])).frontmatter;
  if(f.slug==='discovery-inventory') continue;
  states.set(f.slug,nextResearchState(states.get(f.slug),f));
}
const census=parse(git(['show',`${base}:content/census.yaml`]));
const changes=[];
for(const {slug} of census) {
  const state=states.get(slug);
  if(!state) throw new Error(`Missing accepted packet for ${slug}`);
  const path=`content/projects/${slug}.yaml`, raw=readFileSync(path,'utf8'), doc=parseDocument(raw);
  const accepted=parse(git(['show',`${base}:${path}`])), current=parse(raw);
  delete accepted.research_state; delete current.research_state;
  if(JSON.stringify(accepted)!==JSON.stringify(current)) throw new Error(`Unrelated project change: ${slug}`);
  if(JSON.stringify(doc.get('research_state')?.toJSON())===JSON.stringify(state)) continue;
  doc.set('research_state',state);
  const next=doc.toString({lineWidth:0});
  const before=parse(raw), after=parse(next); delete before.research_state;delete after.research_state;
  if(JSON.stringify(before)!==JSON.stringify(after)) throw new Error(`Non-metadata change: ${slug}`);
  changes.push({path,next});
}
if(mode==='--write') for(const {path,next} of changes) writeFileSync(path,next);
console.log(JSON.stringify({base,mode,projects:changes.length,approvals_changed:0,identities_changed:0}));
