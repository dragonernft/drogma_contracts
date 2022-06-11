const DDDToken = artifacts.require("DDDToken");
const DMAToken = artifacts.require("DMAToken");
const DragonToken = artifacts.require("DragonToken");

module.exports = async function (deployer) {

    // await deployer.deploy(Protocol).then(instance =>{
    //     ProtocolAddr = instance.address
    // });


    await deployer.deploy(DDDToken).then(instance =>{
        DDDTokenAddr = instance.address
    });

    // await deployer.deploy(DMAToken, Team, Airdrop, Operation, ProtocolAddr).then(instance =>{
    // });

    // await deployer.deploy(TestToken, Team, Airdrop, Operation, ProtocolAddr).then(instance =>{
    // });

};
