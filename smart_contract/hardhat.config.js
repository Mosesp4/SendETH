//https://eth-goerli.g.alchemy.com/v2/-FLfzmYHRdsK2mcaFdwWuusu2XPyqiaO

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:  'https://eth-goerli.g.alchemy.com/v2/-FLfzmYHRdsK2mcaFdwWuusu2XPyqiaO',
      accounts: ['2e03e36a14cc7881d9e43ba15e5bb3a76dd52e6f4220c6aebb76e4e3593d78f8'],
    },
  },
};