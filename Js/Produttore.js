// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_viticoltoreContractAddress",
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
		"name": "getDataRaccolta",
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
		"name": "getDatiSensoriProduttore",
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
		"name": "getDestinazioneUva",
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
		"name": "getIdProdottiVinificazioneSerial",
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
		"name": "getIdQuantitaVinoOttenutoSerial",
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
		"name": "getIdQuantitaVinoRivendicatoSerial",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idLotto",
				"type": "uint256"
			}
		],
		"name": "getPesoViticoltore",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idLotto",
				"type": "uint256"
			}
		],
		"name": "getProdottiVinificazione",
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
		"name": "getQuantitaVinoOttenuto",
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
		"name": "getQuantitaVinoRivendicato",
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
		"name": "getTipologiaUva",
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
		"name": "queryVinoOttenutoPerLotto",
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
		"name": "queryVinoRivendicatoPerLotto",
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
				"name": "_prodottiVinificazione",
				"type": "string"
			}
		],
		"name": "setProdottiVinificazione",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_quantitaVinoOttenuto",
				"type": "string"
			}
		],
		"name": "setQuantitaVinoOttenuto",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_quantitaVinoRivendicato",
				"type": "string"
			}
		],
		"name": "setQuantitaVinoRivendicato",
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
				"name": "_pesoArrivo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pesoProdottoFinito",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idContainer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_temperaturaContainer",
				"type": "string"
			}
		],
		"name": "setSensoriProduttore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

console.log('Contract address:', ProduttoreContractAddr);
   
const contract = new web3.eth.Contract(abi, ProduttoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
function addAuthorized() {

	const imbottigliatoreContractAddress = document.getElementById("imbottigliatoreContractAddress").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.addAuthorized(imbottigliatoreContractAddress).send({from: currentAddress,
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

const idLottoProdottiVinificazione = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdProdottiVinificazioneSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setProdottiVinificazioneIdLotto");
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

function setProdottiVinificazione() {
  // Get the input value

  const prodottiVinificazione = document.getElementById("setProdottiVinificazione").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setProdottiVinificazione(prodottiVinificazione).send({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdProdottiVinificazioneSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setProdottiVinificazioneIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoQuantitaVinoOttenuto = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdQuantitaVinoOttenutoSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setQuantitaVinoOttenutoIdLotto");
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

function setQuantitaVinoOttenuto() {
  // Get the input value

  const quantitaVinoOttenuto = document.getElementById("setQuantitaVinoOttenuto").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setQuantitaVinoOttenuto(quantitaVinoOttenuto).send({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdQuantitaVinoOttenutoSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setQuantitaVinoOttenutoIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoQuantitaVinoRivendicato = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdQuantitaVinoRivendicatoSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setQuantitaVinoRivendicatoIdLotto");
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

function setQuantitaVinoRivendicato() {
  // Get the input value

  const quantitaVinoRivendicato = document.getElementById("setQuantitaVinoRivendicato").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setQuantitaVinoRivendicato(quantitaVinoRivendicato).send({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdQuantitaVinoRivendicatoSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setQuantitaVinoRivendicatoIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

// Function to get data from the smart contract
function getProdottiVinificazione() {

  const idLotto = document.getElementById("getProdottiVinificazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getProdottiVinificazione(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultProdottiVinificazione").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getQuantitaVinoOttenuto() {

  const idLotto = document.getElementById("getQuantitaVinoOttenutoIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getQuantitaVinoOttenuto(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultQuantitaVinoOttenuto").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getQuantitaVinoRivendicato() {

  const idLotto = document.getElementById("getQuantitaVinoRivendicatoIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getQuantitaVinoRivendicato(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultQuantitaVinoRivendicato").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDatiSensoriProduttore() {

  const idLotto = document.getElementById("getDatiSensoriProduttoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriProduttore(idLotto).call({ from: currentAddress,
		privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriProduttore").innerHTML = "Data: " + /*JSON.stringify(result)*/ "\nPeso Alla Consegna: " + result[0] +
		"\nPeso Prodotto Finito: " + result[1] + "\nID Container: " + result[2] + "\nTemperatura Container: " + result[3];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//get da Agronomo
function getDatiVendita() {

  const idLotto = document.getElementById("getDatiVenditaIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiVendita(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiVendita").innerHTML = "Data: " + "\nNome Prodotto: " + result[0] +
		"\nPrezzo Vendita: " + result[1] + "\nQuantità: " + result[2] + "\nNome Cliente: " + result[3] + "\nData Vendita: " + result[4];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getPesoViticoltore() {

  const idLotto = document.getElementById("getPesoViticoltoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getPesoViticoltore(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultPesoViticoltore").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDataRaccolta() {

  const idLotto = document.getElementById("getDataRaccoltaIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDataRaccolta(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDataRaccolta").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDestinazioneUva() {

  const idLotto = document.getElementById("getDestinazioneUvaIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDestinazioneUva(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDestinazioneUva").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getTipologiaUva() {

  const idLotto = document.getElementById("getTipologiaUvaIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getTipologiaUva(idLotto).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultTipologiaUva").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}
