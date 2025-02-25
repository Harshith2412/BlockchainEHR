require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_holesky";
const NEXT_PUBLIC_PRIVATE_KEY = "b9704b9e60910fc87fc8f2ce53f4f29a5fb8ee561462723508a25d8a70c65e0e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {
     chainId: 31337,
   },
    // holesky: {
   // url: NEXT_PUBLIC_RPC_URL,
    // accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    //},
  },
};
