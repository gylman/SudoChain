import { ethers } from "hardhat";

async function main() {

  const initPoint1 = {
      location: 0,
      value:  7
  }


  const sudoku = await ethers.deployContract("SudoChain",  [[initPoint1,]] );

  await sudoku.waitForDeployment();

  console.log(
    `Deployed to ${sudoku.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
