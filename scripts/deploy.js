const { ethers, run } = require('hardhat');
const fs = require('fs');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');




async function main() {
  const base_uri = 'https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/';
  const Contract = await ethers.getContractFactory('Adulam');
  const contract = await Contract.deploy('Adulam NFT', 'ADM', base_uri);

  await contract.deployed();

  const address = JSON.stringify({ address: contract.address }, null, 4);
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deployed contract address:', contract.address);
  });
}


main().catch((error) => {
  console.error('Error deploying contract:', error);
  process.exitCode = 1;
});


// 0x25C1DfD1E916169Ec8911EB84C83fCCC3D06c464