export declare const arbitrumSepolia: import("../../types/utils.js").Assign<{
    readonly id: 421614;
    readonly name: "Arbitrum Sepolia";
    readonly network: "arbitrum-sepolia";
    readonly nativeCurrency: {
        readonly name: "Arbitrum Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
        };
        readonly public: {
            readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Blockscout";
            readonly url: "https://sepolia-explorer.arbitrum.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 81930;
        };
    };
    readonly testnet: true;
}, import("../../types/chain.js").ChainConfig<undefined>>;
//# sourceMappingURL=arbitrumSepolia.d.ts.map