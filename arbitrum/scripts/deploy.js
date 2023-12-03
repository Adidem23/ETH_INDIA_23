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
