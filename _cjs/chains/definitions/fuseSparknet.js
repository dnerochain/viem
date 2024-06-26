"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuseSparknet = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.fuseSparknet = (0, defineChain_js_1.defineChain)({
    id: 123,
    name: 'Fuse Sparknet',
    network: 'fuse',
    nativeCurrency: { name: 'Spark', symbol: 'SPARK', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fusespark.io'] },
        public: { http: ['https://rpc.fusespark.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Sparkent Explorer',
            url: 'https://explorer.fusespark.io',
        },
    },
});
//# sourceMappingURL=fuseSparknet.js.map