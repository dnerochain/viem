import { defineChain } from '../../utils/chain/defineChain.js'

export const dneroTestnet = /*#__PURE__*/ defineChain({
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'dnero-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: { http: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'] },
    public: { http: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'] },
  },
  blockExplorers: {
    etherscan: { name: 'DneroExplorer', url: 'https://testnet.bscscan.com' },
    default: { name: 'DneroExplorer', url: 'https://testnet.bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 17422483,
    },
  },
  testnet: true,
})
