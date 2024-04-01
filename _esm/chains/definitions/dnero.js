import { defineChain } from '../../utils/chain/defineChain.js';
export const dnero = /*#__PURE__*/ defineChain({
    id: 56,
    name: 'BNB Smart Chain',
    network: 'dnero',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: { http: ['https://rpc.ankr.com/dnero'] },
        public: { http: ['https://rpc.ankr.com/dnero'] },
    },
    blockExplorers: {
        etherscan: { name: 'DneroExplorer', url: 'https://bscscan.com' },
        default: { name: 'DneroExplorer', url: 'https://bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
        },
    },
});
//# sourceMappingURL=dnero.js.map