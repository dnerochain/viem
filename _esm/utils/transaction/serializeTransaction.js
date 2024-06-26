import { InvalidLegacyVError, } from '../../errors/transaction.js';
import { concatHex } from '../data/concat.js';
import { trim } from '../data/trim.js';
import { toHex } from '../encoding/toHex.js';
import { toRlp } from '../encoding/toRlp.js';
import { assertTransactionEIP1559, assertTransactionEIP2930, assertTransactionLegacy, } from './assertTransaction.js';
import { getTransactionType, } from './getTransactionType.js';
import { serializeAccessList, } from './serializeAccessList.js';
export function serializeTransaction(transaction, signature) {
    const type = getTransactionType(transaction);
    if (type === 'eip1559')
        return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930')
        return serializeTransactionEIP2930(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, } = transaction;
    assertTransactionEIP1559(transaction);
    const serializedAccessList = serializeAccessList(accessList);
    const serializedTransaction = [
        toHex(chainId),
        nonce ? toHex(nonce) : '0x',
        maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? toHex(maxFeePerGas) : '0x',
        gas ? toHex(gas) : '0x',
        to ?? '0x',
        value ? toHex(value) : '0x',
        data ?? '0x',
        serializedAccessList,
    ];
    if (signature) {
        const yParity = (() => {
            if (signature.v === 0n)
                return '0x';
            if (signature.v === 1n)
                return toHex(1);
            return signature.v === 27n ? '0x' : toHex(1);
        })();
        serializedTransaction.push(yParity, trim(signature.r), trim(signature.s));
    }
    return concatHex([
        '0x02',
        toRlp(serializedTransaction),
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    assertTransactionEIP2930(transaction);
    const serializedAccessList = serializeAccessList(accessList);
    const serializedTransaction = [
        toHex(chainId),
        nonce ? toHex(nonce) : '0x',
        gasPrice ? toHex(gasPrice) : '0x',
        gas ? toHex(gas) : '0x',
        to ?? '0x',
        value ? toHex(value) : '0x',
        data ?? '0x',
        serializedAccessList,
    ];
    if (signature) {
        const yParity = (() => {
            if (signature.v === 0n)
                return '0x';
            if (signature.v === 1n)
                return toHex(1);
            return signature.v === 27n ? '0x' : toHex(1);
        })();
        serializedTransaction.push(yParity, trim(signature.r), trim(signature.s));
    }
    return concatHex([
        '0x01',
        toRlp(serializedTransaction),
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    assertTransactionLegacy(transaction);
    let serializedTransaction = [
        nonce ? toHex(nonce) : '0x',
        gasPrice ? toHex(gasPrice) : '0x',
        gas ? toHex(gas) : '0x',
        to ?? '0x',
        value ? toHex(value) : '0x',
        data ?? '0x',
    ];
    if (signature) {
        const v = (() => {
            // EIP-155 (explicit chainId)
            if (chainId > 0)
                return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            // EIP-155 (inferred chainId)
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0)
                    return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            // Pre-EIP-155 (no chainId)
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v)
                throw new InvalidLegacyVError({ v: signature.v });
            return v;
        })();
        serializedTransaction = [
            ...serializedTransaction,
            toHex(v),
            signature.r,
            signature.s,
        ];
    }
    else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            toHex(chainId),
            '0x',
            '0x',
        ];
    }
    return toRlp(serializedTransaction);
}
//# sourceMappingURL=serializeTransaction.js.map