export declare const dnero: import("../../types/utils.js").Assign<{
    readonly id: 56;
    readonly name: "BNB Smart Chain";
    readonly network: "dnero";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/dnero"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/dnero"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "DneroExplorer";
            readonly url: "https://bscscan.com";
        };
        readonly default: {
            readonly name: "DneroExplorer";
            readonly url: "https://bscscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
}, import("../../types/chain.js").ChainConfig<undefined>>;
//# sourceMappingURL=dnero.d.ts.map