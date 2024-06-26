"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForTransactionReceipt = void 0;
const block_js_1 = require("../../errors/block.js");
const transaction_js_1 = require("../../errors/transaction.js");
const getAction_js_1 = require("../../utils/getAction.js");
const observe_js_1 = require("../../utils/observe.js");
const withRetry_js_1 = require("../../utils/promise/withRetry.js");
const stringify_js_1 = require("../../utils/stringify.js");
const getBlock_js_1 = require("./getBlock.js");
const getTransaction_js_1 = require("./getTransaction.js");
const getTransactionReceipt_js_1 = require("./getTransactionReceipt.js");
const watchBlockNumber_js_1 = require("./watchBlockNumber.js");
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, timeout, }) {
    const observerId = (0, stringify_js_1.stringify)(['waitForTransactionReceipt', client.uid, hash]);
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    return new Promise((resolve, reject) => {
        if (timeout)
            setTimeout(() => reject(new transaction_js_1.WaitForTransactionReceiptTimeoutError({ hash })), timeout);
        const _unobserve = (0, observe_js_1.observe)(observerId, { onReplaced, resolve, reject }, (emit) => {
            const _unwatch = (0, getAction_js_1.getAction)(client, watchBlockNumber_js_1.watchBlockNumber, 'watchBlockNumber')({
                emitMissed: true,
                emitOnBegin: true,
                poll: true,
                pollingInterval,
                async onBlockNumber(blockNumber_) {
                    if (retrying)
                        return;
                    let blockNumber = blockNumber_;
                    const done = (fn) => {
                        _unwatch();
                        fn();
                        _unobserve();
                    };
                    try {
                        if (receipt) {
                            if (confirmations > 1 &&
                                (!receipt.blockNumber ||
                                    blockNumber - receipt.blockNumber + 1n < confirmations))
                                return;
                            done(() => emit.resolve(receipt));
                            return;
                        }
                        if (!transaction) {
                            retrying = true;
                            await (0, withRetry_js_1.withRetry)(async () => {
                                transaction = (await (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({ hash }));
                                if (transaction.blockNumber)
                                    blockNumber = transaction.blockNumber;
                            }, {
                                delay: ({ count }) => ~~(1 << count) * 200,
                                retryCount: 6,
                            });
                            retrying = false;
                        }
                        receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({ hash });
                        if (confirmations > 1 &&
                            (!receipt.blockNumber ||
                                blockNumber - receipt.blockNumber + 1n < confirmations))
                            return;
                        done(() => emit.resolve(receipt));
                    }
                    catch (err) {
                        if (transaction &&
                            (err instanceof transaction_js_1.TransactionNotFoundError ||
                                err instanceof transaction_js_1.TransactionReceiptNotFoundError)) {
                            try {
                                replacedTransaction = transaction;
                                retrying = true;
                                const block = await (0, withRetry_js_1.withRetry)(() => (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true,
                                }), {
                                    delay: ({ count }) => ~~(1 << count) * 200,
                                    retryCount: 6,
                                    shouldRetry: ({ error }) => error instanceof block_js_1.BlockNotFoundError,
                                });
                                retrying = false;
                                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from &&
                                    nonce === replacedTransaction.nonce);
                                if (!replacementTransaction)
                                    return;
                                receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                                    hash: replacementTransaction.hash,
                                });
                                if (confirmations > 1 &&
                                    (!receipt.blockNumber ||
                                        blockNumber - receipt.blockNumber + 1n < confirmations))
                                    return;
                                let reason = 'replaced';
                                if (replacementTransaction.to === replacedTransaction.to &&
                                    replacementTransaction.value === replacedTransaction.value) {
                                    reason = 'repriced';
                                }
                                else if (replacementTransaction.from === replacementTransaction.to &&
                                    replacementTransaction.value === 0n) {
                                    reason = 'cancelled';
                                }
                                done(() => {
                                    emit.onReplaced?.({
                                        reason,
                                        replacedTransaction: replacedTransaction,
                                        transaction: replacementTransaction,
                                        transactionReceipt: receipt,
                                    });
                                    emit.resolve(receipt);
                                });
                            }
                            catch (err_) {
                                done(() => emit.reject(err_));
                            }
                        }
                        else {
                            done(() => emit.reject(err));
                        }
                    }
                },
            });
        });
    });
}
exports.waitForTransactionReceipt = waitForTransactionReceipt;
//# sourceMappingURL=waitForTransactionReceipt.js.map