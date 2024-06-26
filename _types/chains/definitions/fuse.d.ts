export declare const fuse: import("../../types/utils.js").Assign<{
    readonly id: 122;
    readonly name: "Fuse";
    readonly network: "fuse";
    readonly nativeCurrency: {
        readonly name: "Fuse";
        readonly symbol: "FUSE";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.fuse.io"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.fuse.io"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Fuse Explorer";
            readonly url: "https://explorer.fuse.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 16146628;
        };
    };
}, import("../../types/chain.js").ChainConfig<undefined>>;
//# sourceMappingURL=fuse.d.ts.map