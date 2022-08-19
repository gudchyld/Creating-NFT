import { ethers } from 'hardhat';

async function main() {
  const amount = ethers.utils.parseEther('0.1');

  //get pointer to piggybank interface
  const nftContractAddress = '0x24dD65BF5085B1fC9beeA5fcD60058174e5D01a7';
  const nftContractRinkeby = '0xfE23Bf911157AF4fdf48f63bAcd06a7C43E3f86B';

  const nftPointer = await ethers.getContractAt(
    'INFTContract',
    nftContractRinkeby
  );

  //call the safemint function
  const nftMint = await nftPointer.safeMint(
    '0x3B2200b3DfA63D121D475f6a406A0D6d205251B6',
    'QmajNHRCJv9gWRh7CWBrsp2zggc6auashG6CkEqGJbDkzo'
  );

  const nftMintTrans = await nftMint.wait();
  console.log('mint receipt is', nftMintTrans);

  /**Informations on this script */
  //NFT-Contract Address (Rinkeby) = 0xfE23Bf911157AF4fdf48f63bAcd06a7C43E3f86B
  //Mint Transaction Hash = 0x8f50118fabff5cf559b43bbd66374b121fcd9419349d067502fc3c92abe384aa

  //Image Url (Opensea) = https://testnets.opensea.io/assets/rinkeby/0xfe23bf911157af4fdf48f63bacd06a7c43e3f86b/0/

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
