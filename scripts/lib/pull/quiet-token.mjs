import { REFRESH_POLICY } from '../refresh-policy.mjs';
import { SHARE_BAR_MIN_USD } from '../share-bar.mjs';
import { addressKey, isOwnDeployment } from '../relationships.mjs';

const at = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) ? Date.parse(value) : null;
const same = (a, b) => typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase();

// This is a depth decision AFTER selection and free market/RPC reads, never admission or a stop.
// Unknown evidence keeps the ordinary explorer path. Non-token addresses are evaluated separately.
export function quietTokenScreen({ target, entry, market, evidence, rpc, previousAddress, previousRead,
  index, infrastructureReaders, now, force = false }) {
  const no = reason => ({ skip: false, reason });
  const refresh = target.refresh;
  if (force || refresh.seed || refresh.retry || refresh.queued || refresh.ignored ||
      refresh.review?.stopped || !['quiet', 'dormant'].includes(refresh.tier)) return no('not ordinary maintenance');
  if (target.census?.identity?.entity_kind !== 'token' || target.census.identity.status === 'conflicted' ||
      target.llamaSlug) return no('not token-only work');
  const deployment = (target.project.deployments ?? []).find(d => d.chain === 'robinhood-chain' &&
    d.role === 'token' && same(d.address, entry.address));
  if (target.previous?.chain !== 'robinhood-chain' || entry.role !== 'token' || !deployment || !isOwnDeployment(target.project, deployment, index) ||
      (target.project.deployments ?? []).some(d => infrastructureReaders.get(addressKey(d.chain, d.address)) === target.slug)) {
    return no('not an independent own-token read');
  }
  const successAt = at(refresh.lastSuccessAt), ownAt = at(refresh.ownActivityAt);
  if (!Number.isFinite(now) || successAt === null || successAt > now || ownAt === null ||
      now - ownAt <= REFRESH_POLICY.quiet || now - ownAt > REFRESH_POLICY.archiveAfter) return no('no established quiet window');
  if (evidence?.complete !== true || evidence.chain_id !== 'robinhood' || at(evidence.observed_at) !== now ||
      !same(evidence.token_address, entry.address) || !same(market?.token_address, entry.address) ||
      at(market.pulled_at) !== now || market.errors?.length !== 0 ||
      !Number.isInteger(evidence.pair_count) || evidence.pair_count < 1 || evidence.pair_count !== market.pairs?.length) {
    return no('incomplete current market evidence');
  }
  if (!Number.isFinite(market.liquidity_usd) || market.liquidity_usd < 0 || market.liquidity_usd >= SHARE_BAR_MIN_USD ||
      market.volume_h24 !== 0 || market.trades_h24 !== 0) return no('market activity or relevance requires normal reads');
  if (!previousAddress || rpc?.errors?.length !== 0 || rpc.is_contract !== true || !rpc.code_hash ||
      !same(rpc.code_hash, previousRead?.code_hash) || rpc.unread?.proxy !== false || rpc.unread?.owner !== false ||
      !['none', 'eoa', 'safe', 'contract'].includes(rpc.owner_type) ||
      !['none', 'eip1967'].includes(rpc.proxy?.type) || rpc.proxy.type !== previousAddress.proxy?.type ||
      rpc.proxy.implementation !== previousAddress.proxy?.implementation || rpc.proxy.admin !== previousAddress.proxy?.admin ||
      rpc.owner !== previousAddress.owner || rpc.owner_type !== previousAddress.owner_type) return no('contract or control changed/unknown');
  return { skip: true, reason: 'quiet token maintenance: complete zero-trade market below relevance bar; deep facts retained' };
}
