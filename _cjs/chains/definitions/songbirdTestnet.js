"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.songbirdTestnet = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.songbirdTestnet = (0, defineChain_js_1.defineChain)({
    id: 16,
    name: 'Coston',
    network: 'coston',
    nativeCurrency: {
        decimals: 18,
        name: 'costonflare',
        symbol: 'CFLR',
    },
    rpcUrls: {
        default: { http: ['https://coston-api.flare.network/ext/C/rpc'] },
        public: { http: ['https://coston-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Coston Explorer',
            url: 'https://coston-explorer.flare.network',
        },
    },
    testnet: true,
});
//# sourceMappingURL=songbirdTestnet.js.map