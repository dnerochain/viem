"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gnosis = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.gnosis = (0, defineChain_js_1.defineChain)({
    id: 100,
    name: 'Gnosis',
    network: 'gnosis',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.gnosischain.com'],
            webSocket: ['wss://rpc.gnosischain.com/wss'],
        },
        public: {
            http: ['https://rpc.gnosischain.com'],
            webSocket: ['wss://rpc.gnosischain.com/wss'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Gnosisscan',
            url: 'https://gnosisscan.io',
        },
        default: {
            name: 'Gnosis Chain Explorer',
            url: 'https://blockscout.com/xdai/mainnet',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 21022491,
        },
    },
});
//# sourceMappingURL=gnosis.js.map