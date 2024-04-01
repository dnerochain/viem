"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gobi = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.gobi = (0, defineChain_js_1.defineChain)({
    id: 1663,
    name: 'Horizen Gobi Testnet',
    network: 'gobi',
    nativeCurrency: {
        decimals: 18,
        name: 'Test ZEN',
        symbol: 'tZEN',
    },
    rpcUrls: {
        public: { http: ['https://gobi-testnet.horizenlabs.io/ethv1'] },
        default: { http: ['https://gobi-testnet.horizenlabs.io/ethv1'] },
    },
    blockExplorers: {
        default: { name: 'Gobi Explorer', url: 'https://gobi-explorer.horizen.io' },
    },
    contracts: {},
    testnet: true,
});
//# sourceMappingURL=gobi.js.map