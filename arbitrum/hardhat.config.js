require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "arbitrum_sepolia",
  networks:{
    hardhat:{

    },
    arbitrum_sepolia: {
      url: "https://arbitrum-sepolia.public.blastapi.io",
      accounts:["5ad7f7823ac4a9518b1ce47b007c63c150bc31382d6878d48cce4abb2cc707ef"],
      chainId: 421614
    }
  }

};
