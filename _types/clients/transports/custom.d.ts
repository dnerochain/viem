import type { ErrorType } from '../../errors/utils.js';
import { type CreateTransportErrorType, type Transport, type TransportConfig } from './createTransport.js';
type EthereumProvider = {
    request(...args: any): Promise<any>;
};
export type CustomTransportConfig = {
    /** The key of the transport. */
    key?: TransportConfig['key'];
    /** The name of the transport. */
    name?: TransportConfig['name'];
    /** The max number of times to retry. */
    retryCount?: TransportConfig['retryCount'];
    /** The base delay (in ms) between retries. */
    retryDelay?: TransportConfig['retryDelay'];
};
export type CustomTransport = Transport<'custom', {}, EthereumProvider['request']>;
export type CustomTransportErrorType = CreateTransportErrorType | ErrorType;
/**
 * @description Creates a custom transport given an EIP-1193 compliant `request` attribute.
 */
export declare function custom<TProvider extends EthereumProvider>(provider: TProvider, config?: CustomTransportConfig): CustomTransport;
export {};
//# sourceMappingURL=custom.d.ts.map