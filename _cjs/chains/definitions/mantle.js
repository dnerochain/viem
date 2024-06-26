"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mantle = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.mantle = (0, defineChain_js_1.defineChain)({
    id: 5000,
    name: 'Mantle',
    network: 'mantle',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.mantle.xyz'] },
        public: { http: ['https://rpc.mantle.xyz'] },
    },
    blockExplorers: {
        etherscan: {
            name: 'Mantle Explorer',
            url: 'https://explorer.mantle.xyz',
        },
        default: {
            name: 'Mantle Explorer',
            url: 'https://explorer.mantle.xyz',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 304717,
        },
    },
});
//# sourceMappingURL=mantle.js.map