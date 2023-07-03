# Blockchain-based multi-party processes in coopetitive scenarios: the BinTraWine approach in agrifood supply chains
This repository contains the actual version of the BinTraWine approach.

In the following guide, we are going to describe the necessary steps and instructions to run the BinTraWine system.

## How to run the BinTraWine system

### Requirements
- Install [Docker](https://www.docker.com/)
- Install [Node.js](https://nodejs.org/en)
- Install [Truffle](https://trufflesuite.com/docs/truffle/quickstart/) framework

### Build-up a Quorum Blockchain
Build (or obtain access to) a Quorum Network in order to deploy the project and interact with it. 

We suggest to use one of the following solutions: 
- [quorum-examples](https://github.com/ConsenSys/quorum-examples)
- [quorum-dev-quickstart](https://github.com/ConsenSys/quorum-dev-quickstart)

**NB**: To test our prototype, we mainly used the 7nodes example. The actual version of the BinTraWine system is based on the Ethereum and Tessera addresses provided in such example and are, in part, the same used in the quorum-dev-quickstart example. However, some addresses could be different.

### Deploy the Smart Contracts
Once you have a Quorum network up and running, you can deploy the BinTraWine Smart Contracts.

The Smart Contracts which are going to be deployed are the following:
- [Agronomo.sol](contracts/Agronomo.sol) (Agronomist)
- [Viticoltore.sol](contracts/Viticoltore.sol) (Grape Grower)
- [Produttore.sol]((contracts/Produttore.sol)) (Wine Producer)
- [Imbottigliatore.sol](contracts/Imbottigliatore.sol) (Filler)
- [Distributore.sol](contracts/Distributore.sol) (Distributor)
- [Rivenditore.sol](contracts/Rivenditore.sol) (Reseller)
- [EnteCertificatore.sol](contracts/EnteCertificatore.sol) (Certifying Authority)
- [Customer.sol](contracts/Customer.sol) (Consumer)

Each Smart Contract represents a defined actor of the wine supply chain. 

The project is istantiated as a Truffle project, such that the deployment and the connection to the Quorum network is managed by Truffle itself. [truffle-config.js](truffle-config.js) is the configuration file for the network.

Deploy the Smart Contracts:
```bash
truffle migrate --f 2 --to 2
```

Once all the contracts are deployed, you are ready to interact with the demo.

### Interaction
In [Html](https://github.com/bpm-diag/BinTraWine/tree/main/Html) folder you can find an HTML page for each actor:

1. [indexAgronomo.html](Html/indexAgronomo.html) (Agronomist)
2. [indexViticoltore.html](Html/indexViticoltore.html) (Grape Grower)
3. [indexProduttore.html](Html/indexProduttore.html) (Wine Producer)
4. [indexImbottigliatore.html](Html/indexImbottigliatore.html) (Filler)
5. [indexDistributore.html](Html/indexDistributore.html) (Distributor)
6. [indexRivenditore.html](Html/indexRivenditore.html) (Reseller)
7. [indexEnteCertificatore.html](Html/indexEnteCertificatore.html) (Certifying Authority)
8. [indexCustomer.html](Html/indexCustomer.html) (Consumer)

**NB.** We suggest to interact with the system following the order of the actors listed above. You will be able to see the results of the wine supply chain processes both in the Consumer and the Certyfing Authority pages, as the actors able to visualize the most relevant data.

