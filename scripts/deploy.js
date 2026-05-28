const { ethers } = require("hardhat");

async function main() {
    const LabToken = await ethers.getContractFactory("LabToken");
    const labToken = await LabToken.deploy();
    await labToken.waitForDeployment();
    console.log(
        "Contract deployed to:",
        await labToken.getAddress()
    );
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
