const Agronomo = artifacts.require("Agronomo");
const Viticoltore = artifacts.require("Viticoltore");

module.exports = async function (deployer) {
//  await deployer.deploy(Agronomo);
  //await deployer.deploy(Viticoltore);
  //await deployer.deploy(Produttore);
  //await deployer.deploy(Imbottigliatore);
  //await deployer.deploy(Distributore);
  //await deployer.deploy(Rivenditore);

  const contract1Instance = await Agronomo.deployed();
  await deployer.deploy(Viticoltore, contract1Instance.address);

};
