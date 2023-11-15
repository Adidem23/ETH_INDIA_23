require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "alfajores",
  networks:{
    hardhat:{

    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts:["82d40752a5373b0e8a3eb4debe0a36e1c6b58ebba942d058d57f20774f0e3996"],
      chainId: 44787
    }
  }

};
