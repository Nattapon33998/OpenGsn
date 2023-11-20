require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");
// require("@nomiclabs/hardhat-etherscan");
// require("hardhat-laika");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://rpc-sepolia.rockx.com",
      accounts: [process.env.PRIVATE_KEY_SEPOLIA],
    },
    loaffinity: {
      url: "https://evmrpc1-iot.adldigitalservice.com",
      accounts: [process.env.PRIVATE_KEY_LOAFFINITY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
