const ethers = require('ethers');

const {
  addressFactory,
  addressFrom,
  addressRouter,
  addressTo,
} = require('./AddressList');

const { erc20ABI, factoryABI, routerABI, pairABI } = require('./ABIList');

// Connect To A Standard Provider
const provider = new ethers.providers.JsonRpcProvider(
  'https://bsc-dataseed.binance.org/'
);

console.log('Your provider is: ' + provider);
