export declare const zkSyncTestnet: import("../../types/utils.js").Assign<{
    readonly id: 280;
    readonly name: "zkSync Era Testnet";
    readonly network: "zksync-era-testnet";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://testnet.era.zksync.dev"];
            readonly webSocket: readonly ["wss://testnet.era.zksync.dev/ws"];
        };
        readonly public: {
            readonly http: readonly ["https://testnet.era.zksync.dev"];
            readonly webSocket: readonly ["wss://testnet.era.zksync.dev/ws"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "zkExplorer";
            readonly url: "https://goerli.explorer.zksync.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xF9cda624FBC7e059355ce98a31693d299FACd963";
        };
    };
    readonly testnet: true;
}, import("../../types/chain.js").ChainConfig<{
    readonly block: {
        exclude: [] | undefined;
        format: (args: import("../../types/utils.js").Assign<Partial<import("../../index.js").RpcBlock>, import("../zksync/types.js").ZkSyncRpcBlockOverrides & {
            transactions: `0x${string}`[] | import("../zksync/types.js").ZkSyncRpcTransaction[];
        }>) => {
            baseFeePerGas: bigint | null;
            difficulty: bigint;
            extraData: `0x${string}`;
            gasLimit: bigint;
            gasUsed: bigint;
            hash: `0x${string}` | null;
            logsBloom: `0x${string}` | null;
            miner: `0x${string}`;
            mixHash: `0x${string}`;
            nonce: `0x${string}` | null;
            number: bigint | null;
            parentHash: `0x${string}`;
            receiptsRoot: `0x${string}`;
            sealFields: `0x${string}`[];
            sha3Uncles: `0x${string}`;
            size: bigint;
            stateRoot: `0x${string}`;
            timestamp: bigint;
            totalDifficulty: bigint | null;
            transactions: `0x${string}`[] | import("../zksync/types.js").ZkSyncTransaction[];
            transactionsRoot: `0x${string}`;
            uncles: `0x${string}`[];
            withdrawals?: import("../../index.js").Withdrawal[] | undefined;
            withdrawalsRoot?: `0x${string}` | undefined;
            l1BatchNumber: bigint | null;
            l1BatchTimestamp: bigint | null;
        } & {};
        type: "block";
    };
    readonly transaction: {
        exclude: [] | undefined;
        format: (args: import("../../types/utils.js").Assign<Partial<import("../../index.js").RpcTransaction>, import("../zksync/types.js").ZkSyncRpcTransaction>) => ({
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            chainId?: number | undefined;
            yParity?: undefined;
            type: "legacy";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            gasPrice: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList?: undefined;
            chainId?: number | undefined;
            yParity: number;
            type: "priority";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            gasPrice: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList?: undefined;
            chainId?: number | undefined;
            yParity: number;
            type: "priority" | "eip712";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "eip2930";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "eip1559";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "priority";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "priority" | "eip712";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice: bigint;
            maxFeePerGas: undefined;
            maxPriorityFeePerGas: undefined;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "eip2930";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "eip1559";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "priority";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        } | {
            blockHash: `0x${string}` | null;
            blockNumber: bigint | null;
            from: `0x${string}`;
            gas: bigint;
            hash: `0x${string}`;
            input: `0x${string}`;
            nonce: number;
            r: `0x${string}`;
            s: `0x${string}`;
            to: `0x${string}` | null;
            transactionIndex: number | null;
            typeHex: `0x${string}` | null;
            v: bigint;
            value: bigint;
            yParity: number;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("../../index.js").AccessList;
            chainId: number;
            type: "priority" | "eip712";
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
        }) & {};
        type: "transaction";
    };
    readonly transactionReceipt: {
        exclude: [] | undefined;
        format: (args: import("../../types/utils.js").Assign<Partial<import("../../index.js").RpcTransactionReceipt>, import("../zksync/types.js").ZkSyncRpcTransactionReceiptOverrides>) => {
            blockHash: `0x${string}`;
            blockNumber: bigint;
            contractAddress: `0x${string}` | null;
            cumulativeGasUsed: bigint;
            effectiveGasPrice: bigint;
            from: `0x${string}`;
            gasUsed: bigint;
            logs: import("../zksync/types.js").ZkSyncLog<bigint, number, boolean, undefined, undefined, undefined, undefined>[];
            logsBloom: `0x${string}`;
            status: "success" | "reverted";
            to: `0x${string}` | null;
            transactionHash: `0x${string}`;
            transactionIndex: number;
            type: import("../zksync/types.js").ZkSyncTransactionType;
            l1BatchNumber: bigint | null;
            l1BatchTxIndex: bigint | null;
            l2ToL1Logs: import("../zksync/types.js").ZkSyncL2ToL1Log[];
        } & {};
        type: "transactionReceipt";
    };
    readonly transactionRequest: {
        exclude: ("customSignature" | "factoryDeps" | "gasPerPubdata" | "paymaster" | "paymasterInput")[] | undefined;
        format: (args: import("../../types/utils.js").Assign<Partial<import("../../index.js").TransactionRequest>, import("../zksync/types.js").ZkSyncTransactionRequest>) => ({
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            type?: "0x0" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            type?: "0x1" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: undefined;
            type?: "0x2" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: undefined;
            type: "0xff" | "0x71";
            eip712Meta: import("../zksync/types.js").ZkSyncEip712Meta;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            type?: "0x0" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type?: "0x1" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type?: "0x2" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type: "0xff" | "0x71";
            eip712Meta: import("../zksync/types.js").ZkSyncEip712Meta;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            type?: "0x0" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: `0x${string}` | undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type?: "0x1" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type?: "0x2" | undefined;
            eip712Meta?: undefined;
        } | {
            data?: `0x${string}` | undefined;
            from: `0x${string}`;
            gas?: `0x${string}` | undefined;
            nonce?: `0x${string}` | undefined;
            to?: `0x${string}` | null | undefined;
            value?: `0x${string}` | undefined;
            gasPrice?: undefined;
            maxFeePerGas?: `0x${string}` | undefined;
            maxPriorityFeePerGas?: `0x${string}` | undefined;
            accessList?: import("../../index.js").AccessList | undefined;
            type: "0xff" | "0x71";
            eip712Meta: import("../zksync/types.js").ZkSyncEip712Meta;
        }) & {
            customSignature: never;
            factoryDeps: never;
            gasPerPubdata: never;
            paymaster: never;
            paymasterInput: never;
        };
        type: "transactionRequest";
    };
}>>;
//# sourceMappingURL=zkSyncTestnet.d.ts.map