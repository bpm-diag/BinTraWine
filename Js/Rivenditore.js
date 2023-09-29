// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_distributoreContractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addAuthorized",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "removeAuthorized",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idLotto",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_tipologiaQuantita",
          "type": "string"
        }
      ],
      "name": "setSensoriRivenditore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idLotto",
          "type": "uint256"
        }
      ],
      "name": "getDatiSensoriRivenditore",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idLotto",
          "type": "uint256"
        }
      ],
      "name": "getDatiVendita",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "input",
          "type": "string"
        }
      ],
      "name": "splitString",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getResult",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getSerial",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getMappaLottiLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "queryTipologiaQuantita",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

console.log('Contract address:', RivenditoreContractAddr);
   
const contract = new web3.eth.Contract(abi, RivenditoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to get data from the smart contract
function addAuthorized() {

	const contractAddress = document.getElementById("contractAddress").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.addAuthorized(contractAddress).send({from: currentAddress,
privateFor: privateFor,})
	.then(function(receipt) {
		console.log(receipt);
	})
	.catch(function(error) {
		console.error(error);
	});
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDatiSensoriRivenditore() {

  const idLotto = document.getElementById("getDatiSensoriRivenditoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriRivenditore(idLotto).call({ from: currentAddress,
privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriRivenditore").innerHTML = "Data: " + /*JSON.stringify(result)*/ "\nTipologia-Quantità: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//get da Distributore
function getDatiVendita() {

  const idLotto = document.getElementById("getDatiVenditaIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiVendita(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiVendita").innerHTML = "Data: " + "\nPrezzo Vendita: " + result[0] + "\nNome Prodotto: " + result[1]
		+ "\nQuantità: " + result[2] + "\nNome Cliente: " + result[3] + "\nData Vendita: " + result[4];
	})
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}
