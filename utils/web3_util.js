const {ethers} = require("ethers");
const { contract} = require('@openzeppelin/test-environment');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const DMA_abi = contract.fromArtifact('DMAToken').abi;

const URL="http://127.0.0.1:7545"

const web3 = createAlchemyWeb3(URL);
const alchemyProvider = new ethers.providers.JsonRpcProvider(URL)


exports.getBalance = (address) =>{
  return new Promise((resolve, reject)=>{
    web3.eth.getBalance(address).then(bal=>{
      bal = web3.utils.fromWei(bal)
      resolve(bal)
    })
  })
}
exports.getTokenBalance = (contractAddr, address) => {
  return new Promise((resolve, reject)=>{
    const DMAContract = new web3.eth.Contract(DMA_abi, contractAddr)
    DMAContract.methods.balanceOf(address).call({ from: address }).then(function (bal) {
      resolve(web3.utils.fromWei(bal));
    })
  })
}

exports.TransferToken = (callContract, to, amount, privateKey) =>{
  return new Promise((resolve, reject)=>{
    const signer = new ethers.Wallet(privateKey, alchemyProvider);
    const contract = new ethers.Contract(callContract, DMA_abi, signer);
    let value = web3.utils.toWei(amount).toString()
    contract.transfer(to, value).then(res=>{
      resolve(res)
    })
  })
}

exports.Transfer = (to, amount, privateKey)=>{
  return new Promise((resolve, reject)=>{
    const tx = {
      to: to,
      value: ethers.utils.parseEther(amount),
    };
    const signer = new ethers.Wallet(privateKey, alchemyProvider);
    signer.sendTransaction(tx).then(res=>{
      resolve(res)
    });
  })
}

exports.approve = (callContract, spender, amount, privateKey, gasPrice) =>{
  return new Promise((resolve, reject)=>{
    const signer = new ethers.Wallet(privateKey, alchemyProvider);
    const contract = new ethers.Contract(callContract, DMA_abi, signer);
    let value = web3.utils.toWei(amount).toString()
    contract.approve(spender, value, {gasPrice: gasPrice}).then(res=>{
      resolve(res)
    })
  })
}
