# BinTraWine
This repository contains the actual version of the BinTraWine project.

In the following guide, we are going to describe the necessary steps and instructions needed to run the BinTraWine software.
## Guide
### Requirements
In order to start the BinTraWine project you need:
- Docker (**Recommended**. Still, you can use also other solutions present in the links advised in the next section)
- Node.js
- Truffle https://trufflesuite.com/docs/truffle/quickstart/
### Build-up a Quorum Blockchain
The first step is to build or obtain access to a Quorum Network in order to deploy the project and interact with it. 
We advise to use one of the solutions present at the following links: 
- https://github.com/ConsenSys/quorum-examples  
- https://github.com/ConsenSys/quorum-dev-quickstart

#### NB: To test our prototype, we mainly used the Quorum 7nodes example present in the first link, the actual version is based on the Ethereum and Tessera addresses provided by the example, which are in part the same used in the quorum-dev-quickstart example, but some addresses could be different.

### Deploy the Smart Contracts
Once you have a Quorum network up and running, you can start deploying the BinTraWine smart contracts.
The smart contracts which are going to be deployed are:
- Agronomo.sol (Agronomist)
- Viticoltore.sol (Grape Grower)
- Produttore.sol (Wine Producer)
- Imbottigliatore.sol (Filler)
- Distributore.sol (Distributor)
- Rivenditore.sol (Reseller)
- EnteCertificatore.sol (Certifying Authority)
- Customer.sol (Consumer)

Each Smart Contract represents a defined actor of the supply chain. 

You can find the contracts here: https://github.com/bpm-diag/BinTraWine/tree/main/contracts

**The project is istantiated as a Truffle project, such that the deployment and the connection to the Quorum network is managed by truffle itself. You can find the network configuration in the "truffle-config.js" file.**
Here we will show how to deploy the smart contracts using Truffle (Still, you can use other deployment solutions if it's needed).
Using a command line, launch the command: ```truffle migrate --f 2 --to 2```
Once all the contracts are deployed, you are ready to interact with the demo.

### Interaction
In the Html folder https://github.com/bpm-diag/BinTraWine/tree/main/Html you can find an Html page for each actor of the supply chain:
- indexAgronomo.html = Agronomist
- indexViticoltore.html = Grape Grower
- indexProduttore.html = Wine Producer
- indexImbottigliatore.html = Filler
- indexDistributore.html = Distributor
- indexRivenditore.html = Reseller
- indexEnteCertificatore.html = Certifying Authority
- indexCustomer.html = Consumer

We suggest to interact with the system following the order of interaction of the actors in the supply chain just described. Specifically, you will be able to check the results of the supply chain processes in the Consumer page and the Certyfing Authoriy page, where the Consumer can visualize the most relevant data about the single bottle, while the Certifying Authority can check at mostly all the data transacted on the supply chain. 



