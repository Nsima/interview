require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  networks: {
    // For Alchemy, you typically use the `rinkeby`, `ropsten`, `kovan`, or `mainnet` network
    // Adjust `url` and `accounts` properties accordingly
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    }, 
    ropsten: {
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // mainnet: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
