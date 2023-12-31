// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
const hre = require("hardhat");

async function main() {
 const contract= await hre.ethers.getContractFactory('Simple');
 const deploy=await contract.deploy();
 const contractaddress=await deploy.getAddress();
 console.log(`Contact Address of deployed Contract is : ${contractaddress}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
