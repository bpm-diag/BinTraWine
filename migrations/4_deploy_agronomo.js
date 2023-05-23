const Agronomo = artifacts.require("Agronomo");

module.exports = async function (deployer) {
  await deployer.deploy(Agronomo);

};
