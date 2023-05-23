const Agronomo = artifacts.require("Agronomo");
const Viticoltore = artifacts.require("Viticoltore");
const Produttore = artifacts.require("Produttore");
const Imbottigliatore = artifacts.require("Imbottigliatore");
const Distributore = artifacts.require("Distributore");
const Rivenditore = artifacts.require("Rivenditore");
const EnteCertificatore = artifacts.require("EnteCertificatore");
const SimulatoreSensori = artifacts.require("SimulatoreSensori");
const Customer = artifacts.require("Customer");

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

module.exports = async function (deployer) {
  //await deployer.deploy(Customer/*, {privateFor: privateFor,}*/);
  //const contract0Instance = await Customer.deployed();
  await deployer.deploy(Agronomo, /*contract0Instance.address,*/{privateFor: privateFor,});
  //await deployer.deploy(Viticoltore);
  //await deployer.deploy(Produttore);
  //await deployer.deploy(Imbottigliatore);
  //await deployer.deploy(Distributore);
  //await deployer.deploy(Rivenditore);

  const contract1Instance = await Agronomo.deployed();
  await deployer.deploy(Viticoltore, contract1Instance.address, /*contract0Instance.address,*/ {privateFor: privateFor,});
  const contract2Instance = await Viticoltore.deployed();
  await deployer.deploy(Produttore, contract2Instance.address, /*contract0Instance.address,*/{privateFor: privateFor,});
  const contract3Instance = await Produttore.deployed();
  await deployer.deploy(Imbottigliatore, contract3Instance.address, contract2Instance.address, /*contract0Instance.address,*/ {privateFor: privateFor,});
  const contract4Instance = await Imbottigliatore.deployed();
  await deployer.deploy(Distributore, contract4Instance.address, /*contract0Instance.address,*/ {privateFor: privateFor,});
  const contract5Instance = await Distributore.deployed();
  await deployer.deploy(Rivenditore, contract5Instance.address, {privateFor: privateFor,});
  const contract6Instance = await Rivenditore.deployed();
  //const contract7Instance = await EnteCertificatore.deployed();

  await deployer.deploy(
  EnteCertificatore,
  contract1Instance.address,
  contract2Instance.address,
  contract3Instance.address,
  contract4Instance.address,
  contract5Instance.address,
  contract6Instance.address, /*contract0Instance.address,*/ {privateFor: privateFor,});

  const contract7Instance = await EnteCertificatore.deployed();

  await deployer.deploy(Customer, contract1Instance.address, contract2Instance.address, contract3Instance.address,
      contract4Instance.address, contract5Instance.address, contract7Instance.address, {privateFor: privateFor},);

  await deployer.deploy(
    SimulatoreSensori,
    contract1Instance.address,
    contract2Instance.address,
    contract3Instance.address,
    contract4Instance.address,
    contract5Instance.address,
    contract6Instance.address, {privateFor: privateFor,}
  );
};
