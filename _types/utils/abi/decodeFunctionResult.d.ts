import type { Abi, ExtractAbiFunctionNames } from 'abitype';
import { type AbiFunctionNotFoundErrorType, type AbiFunctionOutputsNotFoundErrorType } from '../../errors/abi.js';
import type { ContractFunctionResult, GetFunctionArgs, InferFunctionName } from '../../types/contract.js';
import type { Hex } from '../../types/misc.js';
import type { ErrorType } from '../../errors/utils.js';
import { type DecodeAbiParametersErrorType } from './decodeAbiParameters.js';
import { type GetAbiItemErrorType } from './getAbiItem.js';
export type DecodeFunctionResultParameters<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string | undefined = string, _FunctionName = InferFunctionName<TAbi, TFunctionName>> = {
    functionName?: _FunctionName;
    data: Hex;
} & (TFunctionName extends string ? {
    abi: TAbi;
} & Partial<GetFunctionArgs<TAbi, TFunctionName>> : _FunctionName extends string ? {
    abi: [TAbi[number]];
} & Partial<GetFunctionArgs<TAbi, _FunctionName>> : never);
export type DecodeFunctionResultReturnType<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string | undefined = string, _FunctionName extends string = TAbi extends Abi ? Abi extends TAbi ? string : ExtractAbiFunctionNames<TAbi>[number] : string> = TFunctionName extends string ? ContractFunctionResult<TAbi, TFunctionName> : ContractFunctionResult<TAbi, _FunctionName>;
export type DecodeFunctionResultErrorType = AbiFunctionNotFoundErrorType | AbiFunctionOutputsNotFoundErrorType | DecodeAbiParametersErrorType | GetAbiItemErrorType | ErrorType;
export declare function decodeFunctionResult<const TAbi extends Abi | readonly unknown[], TFunctionName extends string | undefined = undefined>({ abi, args, functionName, data, }: DecodeFunctionResultParameters<TAbi, TFunctionName>): DecodeFunctionResultReturnType<TAbi, TFunctionName>;
//# sourceMappingURL=decodeFunctionResult.d.ts.map