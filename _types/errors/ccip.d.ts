import type { Address } from 'abitype';
import type { Hex } from '../types/misc.js';
import { BaseError } from './base.js';
export type OffchainLookupErrorType = OffchainLookupError & {
    name: 'OffchainLookupError';
};
export declare class OffchainLookupError extends BaseError {
    name: string;
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }: {
        callbackSelector: Hex;
        cause: BaseError;
        data: Hex;
        extraData: Hex;
        sender: Address;
        urls: readonly string[];
    });
}
export type OffchainLookupResponseMalformedErrorType = OffchainLookupResponseMalformedError & {
    name: 'OffchainLookupResponseMalformedError';
};
export declare class OffchainLookupResponseMalformedError extends BaseError {
    name: string;
    constructor({ result, url }: {
        result: any;
        url: string;
    });
}
export type OffchainLookupSenderMismatchErrorType = OffchainLookupSenderMismatchError & {
    name: 'OffchainLookupSenderMismatchError';
};
export declare class OffchainLookupSenderMismatchError extends BaseError {
    name: string;
    constructor({ sender, to }: {
        sender: Address;
        to: Address;
    });
}
//# sourceMappingURL=ccip.d.ts.map