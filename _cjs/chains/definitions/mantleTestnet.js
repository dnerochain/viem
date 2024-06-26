"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mantleTestnet = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.mantleTestnet = (0, defineChain_js_1.defineChain)({
    id: 5001,
    name: 'Mantle Testnet',
    network: 'mantle',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.mantle.xyz'] },
        public: { http: ['https://rpc.testnet.mantle.xyz'] },
    },
    blockExplorers: {
        etherscan: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
        },
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=mantleTestnet.js.map