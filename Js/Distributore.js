// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_imbottigliatoreContractAddress",
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
		"name": "getCodiceBarre",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
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
		"name": "getDatiSensoriDistributore",
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idVendita",
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
		"name": "getDestinazione",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIdDestinazioneSerial",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIdVenditaSerial",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMappingVenditeLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [],
		"name": "queryNomiClientiQuantita",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "queryQuantitaTrasportataPerLotto",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
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
				"internalType": "string",
				"name": "_prezzoVendita",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nomeProdotto",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantita",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_nomeCliente",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dataVendita",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_addresses",
				"type": "address[]"
			}
		],
		"name": "setDatiVendita",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_destinazione",
				"type": "string"
			}
		],
		"name": "setDestinazione",
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
				"name": "_quantitaTrasportata",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_temperaturaTrasporto",
				"type": "string"
			}
		],
		"name": "setSensoriDistributore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

console.log('Contract address:', DistributoreContractAddr);
   
const contract = new web3.eth.Contract(abi, DistributoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
function addAuthorized() {

	const rivenditoreContractAddress = document.getElementById("rivenditoreContractAddress").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.addAuthorized(rivenditoreContractAddress).send({from: currentAddress,
	privateFor: privateFor, })
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

const idLottoDestinazione = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdDestinazioneSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setDestinazioneIdLotto");
			idLottoShow.value = result;
      // Display the result on the web page
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  });

function setDestinazione() {
  // Get the input value

  const destinazione = document.getElementById("setDestinazione").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setDestinazione(destinazione).send({ from: currentAddress,
	privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdDestinazioneSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setDestinazioneIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoVendita = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdVenditaSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setDatiVenditaIdLotto");
			idLottoShow.value = result;
      // Display the result on the web page
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  });

function setDatiVendita() {
  // Get the input value

  const prezzoVendita = document.getElementById("prezzoVendita").value;
	const nomeProdotto = document.getElementById("nomeProdottoVendita").value;
	const quantita = document.getElementById("quantitaVendita").value;
	const nomeCliente = document.getElementById("nomeClienteVendita").value;
	const dataVendita = document.getElementById("dataVendita").value;
	const addressesInput = document.getElementById("addressesVendite");
	const addresses = addressesInput.value.split(",");

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setDatiVendita(prezzoVendita, nomeProdotto, quantita, nomeCliente, dataVendita, addresses).send({ from: currentAddress,
	privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdVenditaSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setDatiVenditaIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

// Function to get data from the smart contract
function getDestinazione() {

  const idLotto = document.getElementById("getDestinazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDestinazione(idLotto).call({ from: currentAddress,
	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultDestinazione").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

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
    document.getElementById("resultDatiVendita").innerHTML = "Data: " + "\nPrezzo Vendita: "+ result[0] + "\nNome Prodotto: " + result[1] +
		"\nQuantità: " + result[2] + "\nNomeCliente: " + result[3] + "\nData Vendita: " + result[4];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDatiSensoriDistributore() {

  const idLotto = document.getElementById("getDatiSensoriDistributoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriDistributore(idLotto).call({ from: currentAddress,
	privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriDistributore").innerHTML = "Data: " + /*JSON.stringify(result)*/"\nQuantità Trasportata: " + result[0] +
		"\nTemperatura Trasporto: " + result[1];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//get da Imbottigliatore
function getCodiceBarre() {

  const idLotto = document.getElementById("getCodiceBarreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getCodiceBarre(idLotto).call({ from: currentAddress,
	privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultCodiceBarre").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}
