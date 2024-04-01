"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddresses = void 0;
const getAddress_js_1 = require("../../utils/address/getAddress.js");
async function getAddresses(client) {
    if (client.account?.type === 'local')
        return [client.account.address];
    const addresses = await client.request({ method: 'eth_accounts' });
    return addresses.map((address) => (0, getAddress_js_1.checksumAddress)(address));
}
exports.getAddresses = getAddresses;
//# sourceMappingURL=getAddresses.js.map