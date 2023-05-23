const Agronomo = artifacts.require("Agronomo");
const Viticoltore = artifacts.require("Viticoltore");
const Produttore = artifacts.require("Produttore");
const Imbottigliatore = artifacts.require("Imbottigliatore");
const Distributore = artifacts.require("Distributore");
const Rivenditore = artifacts.require("Rivenditore");
const EnteCertificatore = artifacts.require("EnteCertificatore");
const SimulatoreSensori = artifacts.require("SimulatoreSensori");

const Web3 = require("web3");
const truffleConfig = require("../truffle-config");

module.exports = async function (deployer, network) {
  const web3 = new Web3(truffleConfig.networks[network].provider());

  const accounts = await web3.eth.getAccounts();
  const nodeOne = accounts[0];
  const nodeTwo = accounts[1];
  const nodeThree = accounts[2];
  const nodeFour = accounts[3];
  const nodeFive = accounts[4];
  const nodeSix = accounts[5];
  const nodeSeven = accounts[6];

/*  const agronomo = await deployContract(Agronomo, nodeOne);
  const viticoltore = await deployContract(Viticoltore, nodeTwo, agronomo.address);
  const produttore = await deployContract(Produttore, nodeThree, viticoltore.address);
  const imbottigliatore = await deployContract(Imbottigliatore, nodeFour, produttore.address, viticoltore.address);
  const distributore = await deployContract(Distributore, nodeFive, imbottigliatore.address);
  const rivenditore = await deployContract(Rivenditore, nodeSix, distributore.address);
  const enteCertificatore = await deployContract(EnteCertificatore, nodeSeven, agronomo.address, viticoltore.address, produttore.address,
     imbottigliatore.address, distributore.address, rivenditore.address);
  const simulatoreSensori = await deployContract(SimulatoreSensori, nodeSeven, agronomo.address, viticoltore.address, produttore.address,
     imbottigliatore.address, distributore.address, rivenditore.address); */
     await deployer.deploy(Agronomo, nodeOne);
     //await deployer.deploy(Viticoltore);
     //await deployer.deploy(Produttore);
     //await deployer.deploy(Imbottigliatore);
     //await deployer.deploy(Distributore);
     //await deployer.deploy(Rivenditore);

     const contract1Instance = await Agronomo.deployed();
     await deployer.deploy(Viticoltore, nodeTwo,contract1Instance.address);
     const contract2Instance = await Viticoltore.deployed();
     await deployer.deploy(Produttore, nodeThree,contract2Instance.address);
     const contract3Instance = await Produttore.deployed();
     await deployer.deploy(Imbottigliatore, nodeFour,contract3Instance.address, contract2Instance.address);
     const contract4Instance = await Imbottigliatore.deployed();
     await deployer.deploy(Distributore, nodeFive,contract4Instance.address);
     const contract5Instance = await Distributore.deployed();
     await deployer.deploy(Rivenditore, nodeSix,contract5Instance.address);
     const contract6Instance = await Rivenditore.deployed();
     //const contract7Instance = await EnteCertificatore.deployed();

     await deployer.deploy(
     EnteCertificatore, nodeSeven,
     contract1Instance.address,
     contract2Instance.address,
     contract3Instance.address,
     contract4Instance.address,
     contract5Instance.address,
     contract6Instance.address);

     await deployer.deploy(
       SimulatoreSensori, nodeSeven,
       contract1Instance.address,
       contract2Instance.address,
       contract3Instance.address,
       contract4Instance.address,
       contract5Instance.address,
       contract6Instance.address
     );

};
