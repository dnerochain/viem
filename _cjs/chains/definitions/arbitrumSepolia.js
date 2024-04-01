"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitrumSepolia = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.arbitrumSepolia = (0, defineChain_js_1.defineChain)({
    id: 421614,
    name: 'Arbitrum Sepolia',
    network: 'arbitrum-sepolia',
    nativeCurrency: {
        name: 'Arbitrum Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rollup.arbitrum.io/rpc'],
        },
        public: {
            http: ['https://sepolia-rollup.arbitrum.io/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia-explorer.arbitrum.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 81930,
        },
    },
    testnet: true,
});
//# sourceMappingURL=arbitrumSepolia.js.map