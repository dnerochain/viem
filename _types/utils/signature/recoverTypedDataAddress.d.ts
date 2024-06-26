import type { Address, TypedData } from 'abitype';
import type { ByteArray, Hex } from '../../types/misc.js';
import type { TypedDataDefinition } from '../../types/typedData.js';
import type { ErrorType } from '../../errors/utils.js';
import { type HashTypedDataErrorType } from './hashTypedData.js';
import { type RecoverAddressErrorType } from './recoverAddress.js';
export type RecoverTypedDataAddressParameters<TTypedData extends TypedData | {
    [key: string]: unknown;
} = TypedData, TPrimaryType extends string = string> = TypedDataDefinition<TTypedData, TPrimaryType> & {
    signature: Hex | ByteArray;
};
export type RecoverTypedDataAddressReturnType = Address;
export type RecoverTypedDataAddressErrorType = RecoverAddressErrorType | HashTypedDataErrorType | ErrorType;
export declare function recoverTypedDataAddress<const TTypedData extends TypedData | {
    [key: string]: unknown;
}, TPrimaryType extends string = string>({ domain, message, primaryType, signature, types, }: RecoverTypedDataAddressParameters<TTypedData, TPrimaryType>): Promise<RecoverTypedDataAddressReturnType>;
//# sourceMappingURL=recoverTypedDataAddress.d.ts.map