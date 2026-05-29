const { ethers } = require("hardhat");

async function main() {
    const LabToken = await ethers.getContractFactory("LabToken");
    const labToken = await LabToken.deploy();
    await labToken.waitForDeployment();

    const address = await labToken.getAddress();
    console.log("Contract deployed to:", address);

    // Transfer tokens to your MetaMask wallet
    const myMetaMaskAddress = ethers.getAddress("0x39952155336a0A8CE2E19fC163611bc8C6fCF97B");
    const tx = await labToken.transfer(myMetaMaskAddress, ethers.parseEther("10000"));
    await tx.wait();
    console.log("Sent 10,000 LTK to", myMetaMaskAddress);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
