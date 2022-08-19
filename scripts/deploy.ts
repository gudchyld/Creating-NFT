import { ethers } from 'hardhat';

async function main() {
  const myNFT = await ethers.getContractFactory('MyNFT');
  const NFT = await myNFT.deploy();

  await NFT.deployed();

  console.log('NFT deployed to:', NFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
