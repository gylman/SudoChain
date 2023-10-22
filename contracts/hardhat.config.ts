import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { load } from 'ts-dotenv';
import "@nomicfoundation/hardhat-verify";

const env = load({
  INFURA_API_KEY: String,
  INFURA_SECRET_KEY: String,
  WALLET_PRIVATE_KEY: String,
  ETHERSCAN_API_KEY: String
});



const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      }
    ]
  },
  networks: {
      sepolia: {
        url: `https://sepolia.infura.io/v3/${env.INFURA_API_KEY}`,
        accounts: [env.WALLET_PRIVATE_KEY]
      },
      scrollSepolia: {
        url: "https://sepolia-rpc.scroll.io/",
        accounts: [env.WALLET_PRIVATE_KEY] ,
      },
      mantleGoerli: {
        url: "https://rpc.testnet.mantle.xyz",
        accounts: [env.WALLET_PRIVATE_KEY] ,
      }
      // mainnet: {
      //   url: `https://mainnet.infura.io/v3/${env.INFURA_API_KEY}`,
      //   accounts: [env.WALLET_PRIVATE_KEY]
      // },
  
  },
  etherscan: {
    apiKey: env.ETHERSCAN_API_KEY,
  },

};

export default config;