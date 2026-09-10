import {useState} from 'react';
import {createFileRoute,Link} from '@tanstack/react-router';
import {getStockPairs} from '@/data/content-server';

export const Route=createFileRoute('/pairs')({loader:()=>getStockPairs(),
  head:()=>({meta:[{title:'Stock pairs · Icarus'},{name:'description',content:'Exact-contract stock and tracked-token pool evidence, with sources and observation dates.'}]}),component:Pairs});

function Pairs(){
  const data=Route.useLoaderData();const [query,setQuery]=useState('');
  const rows=data.rows.filter(r=>`${r.stock} ${r.name} ${r.tokenAddress} ${r.stockAddress} ${r.pool}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="wrap pb-10 pt-5">
    <h1 className="text-2xl font-semibold">Stock pairs</h1>
    <p className="mt-2">Stock-token pools linked to tracked projects by exact contracts—not matching tickers or themes.</p>
    <p className="mt-2 text-[var(--t3)]">Pair observations are distinct from stock-token availability. Activity below is a per-leg USD estimate, not full pool volume, liquidity or an investment ranking.</p>
    <label className="block my-4">Find a stock, project or contract
      <input className="block w-full mt-2 rounded border p-2 bg-[var(--s1)]" type="search" value={query} onChange={e=>setQuery(e.target.value)} />
    </label>
    <p role="status">{rows.length} matching pairs · {data.reviewedStockAddresses} reviewed stock addresses · {data.unreviewedStockAddresses} reference entries awaiting review</p>
    {data.total>data.limit&&<p>Showing the first {data.limit} of {data.total} pairs, ordered by stock and project.</p>}
    {data.conflicts>0&&<p className="text-[var(--warn)]">Conflicting observations are withheld or marked below.</p>}
    {!data.total?<section className="border rounded p-5 my-4"><h2 className="font-semibold">No source-verified pair list yet</h2>
      <p>Current retained evidence does not pass the exact-leg and reviewed stock-address checks. This does not mean no pools exist.</p>
      <Link to="/d/$id" params={{id:'stock-tokens'}}>Inspect stock-reference sources →</Link></section>
      :!rows.length?<p className="my-5">No pairs match that search.</p>:<div className="overflow-x-auto my-4" role="region" aria-label="Stock pair observations" tabIndex={0}>
        <table className="w-full text-left text-sm"><caption className="text-left pb-3">Observed pools · dated per-leg estimates</caption>
          <thead><tr>{['Stock / project','Pool and token contracts','24h leg estimate','Evidence'].map(h=><th scope="col" className="p-3 border-b" key={h}>{h}</th>)}</tr></thead>
          <tbody>{rows.map(r=><tr key={r.id}><td className="p-3 border-b"><strong>{r.stock}</strong><br/><Link to="/n/$slug" params={{slug:r.slug}}>{r.name}</Link></td>
            <td className="p-3 border-b max-w-xs break-all"><span>{r.pool}</span><br/><span>Stock: {r.stockAddress}</span><br/><span>Token: {r.tokenAddress}</span></td>
            <td className="p-3 border-b">{r.legVolumeUsd===null?'—':r.legVolumeUsd.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}<br/><span>{r.state}</span></td>
            <td className="p-3 border-b">{r.asOf?<time dateTime={r.asOf}>{r.asOf}</time>:'Date unknown'}<br/>{r.source&&<a href={r.source} target="_blank" rel="noreferrer">Pool source ↗</a>}<br/>
              <Link to="/d/$id" params={{id:'stock-tokens'}}>Stock reference</Link></td></tr>)}</tbody>
        </table></div>}
  </main>;
}
