"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dnero = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.dnero = (0, defineChain_js_1.defineChain)({
    id: 5647,
    name: 'Dnerochain',
    network: 'dnero',
    nativeCurrency: {
        decimals: 18,
        name: 'DNERO',
        symbol: 'DNERO',
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