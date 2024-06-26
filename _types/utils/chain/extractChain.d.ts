import type { ErrorType } from '../../errors/utils.js';
import type { Chain, ExtractChain } from '../../types/chain.js';
export type ExtractChainParameters<chains extends readonly Chain[], chainId extends chains[number]['id']> = {
    chains: chains;
    id: chainId | chains[number]['id'];
};
export type ExtractChainReturnType<chains extends readonly Chain[], chainId extends chains[number]['id']> = ExtractChain<chains, chainId>;
export type ExtractChainErrorType = ErrorType;
export declare function extractChain<const chains extends readonly Chain[], chainId extends chains[number]['id']>({ chains, id, }: ExtractChainParameters<chains, chainId>): ExtractChainReturnType<chains, chainId>;
//# sourceMappingURL=extractChain.d.ts.map