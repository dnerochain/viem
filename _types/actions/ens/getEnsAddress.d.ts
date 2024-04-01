import type { Address } from 'abitype';
import type { Client } from '../../clients/createClient.js';
import type { Transport } from '../../clients/transports/createTransport.js';
import type { ErrorType } from '../../errors/utils.js';
import type { Chain } from '../../types/chain.js';
import type { Prettify } from '../../types/utils.js';
import { type DecodeFunctionResultErrorType } from '../../utils/abi/decodeFunctionResult.js';
import { type EncodeFunctionDataErrorType } from '../../utils/abi/encodeFunctionData.js';
import { type GetChainContractAddressErrorType } from '../../utils/chain/getChainContractAddress.js';
import { type TrimErrorType } from '../../utils/data/trim.js';
import { type ToHexErrorType } from '../../utils/encoding/toHex.js';
import { type NamehashErrorType } from '../../utils/ens/namehash.js';
import { type PacketToBytesErrorType } from '../../utils/ens/packetToBytes.js';
import { type ReadContractParameters } from '../public/readContract.js';
export type GetEnsAddressParameters = Prettify<Pick<ReadContractParameters, 'blockNumber' | 'blockTag'> & {
    /** ENSIP-9 compliant coinType used to resolve addresses for other chains */
    coinType?: number;
    /** Name to get the address for. */
    name: string;
    /** Address of ENS Universal Resolver Contract. */
    universalResolverAddress?: Address;
}>;
export type GetEnsAddressReturnType = Address | null;
export type GetEnsAddressErrorType = GetChainContractAddressErrorType | EncodeFunctionDataErrorType | NamehashErrorType | ToHexErrorType | PacketToBytesErrorType | DecodeFunctionResultErrorType | TrimErrorType | ErrorType;
/**
 * Gets address for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAddress.html
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAddressParameters}
 * @returns Address for ENS name or `null` if not found. {@link GetEnsAddressReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAddress, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAddress = await getEnsAddress(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0xd2135CfB216b74109775236E36d4b433F1DF507B'
 */
export declare function getEnsAddress<TChain extends Chain | undefined>(client: Client<Transport, TChain>, { blockNumber, blockTag, coinType, name, universalResolverAddress: universalResolverAddress_, }: GetEnsAddressParameters): Promise<GetEnsAddressReturnType>;
//# sourceMappingURL=getEnsAddress.d.ts.map