import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployComicNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ComicNFT", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const comicNFT = await hre.ethers.getContract<Contract>("ComicNFT", deployer);
  console.log("Deployment successful:", comicNFT.address);
};

export default deployComicNFT;
deployComicNFT.tags = ["ComicNFT"];
