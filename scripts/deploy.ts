import { ethers } from "hardhat";

async function main() {
  const [owner, mgr1] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", owner.address);
  console.log("Manager address", mgr1.address);

  const Mok = await ethers.getContractFactory("Mok");
  const mok = await Mok.deploy();
  await mok.deployed();
  console.log("Mok deployed to:", mok.address);

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(mok.address, owner.address, mgr1.address, mgr1.address);
  await lottery.deployed();
  console.log("Lottery deployed to:", lottery.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
