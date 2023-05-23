// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "agronomoContractAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "viticoltoreContractAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "produttoreContractAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "imbottigliatoreContractAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "distributoreContractAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "rivenditoreContractAddr",
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
		"name": "getAllergeni",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getAnalisiQualitaProdotto",
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
		"name": "getCertificazione",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getCertificazioneUvaAppezzamento",
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
				"name": "_idTerreno",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getDatiForniture",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getDatiSensoriAgronomo",
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
				"name": "_idLotto",
				"type": "uint256"
			}
		],
		"name": "getDatiSensoriImbottigliatore",
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
		"name": "getDatiSensoriRivenditore",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getDatiSensoriViticoltore",
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
		"name": "getDatiVenditaDistributore",
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
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getDatiVenditaViticoltore",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idTerreno",
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
		"name": "getIdCertificazioneSerial",
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
		"name": "getIdValidazioneSerial",
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
		"name": "getSolfiti",
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
		"name": "getValidazione",
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
		"name": "getlocalitaUve",
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
				"name": "_certificazione",
				"type": "string"
			}
		],
		"name": "setCertificazione",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_validazione",
				"type": "string"
			}
		],
		"name": "setValidazione",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

console.log('Contract address:', EnteCertificatoreContractAddr);
   
const contract = new web3.eth.Contract(abi, EnteCertificatoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
const idLottoValidazione = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdValidazioneSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setValidazioneIdLotto");
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

function setValidazione() {
  // Get the input value

  const validazione = document.getElementById("setValidazione").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setValidazione(validazione).send({ from: currentAddress,
privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdValidazioneSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setValidazioneIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoCertificazione = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdCertificazioneSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setCertificazioneIdLotto");
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

function setCertificazione() {
  // Get the input value

  const certificazione = document.getElementById("setCertificazione").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setCertificazione(certificazione).send({ from: currentAddress,
privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdCertificazioneSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setCertificazioneIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

//Funzioni di get dell'ente
function getValidazione() {

  const idLotto = document.getElementById("getValidazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getValidazione(idLotto).call({ from: currentAddress,
privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultValidazione").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getCertificazione() {

  const idLotto = document.getElementById("getCertificazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getCertificazione(idLotto).call({ from: currentAddress,
privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultCertificazione").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//Funzioni di get di tutti gli altri attori
//Agronomo
function getAnalisiQualitaProdotto() {

  const idTerrenoAnalisiQualitaProdotto = document.getElementById("getAnalisiQualitaProdottoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getAnalisiQualitaProdotto(idTerrenoAnalisiQualitaProdotto).call({ from: currentAddress,
privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultAnalisiQualitaProdotto").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getCertificazioneUvaAppezzamento() {

  const idTerreno = document.getElementById("getCertificazioneUvaAppezzamentoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getCertificazioneUvaAppezzamento(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultCertificazioneUvaAppezzamento").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getDatiSensoriAgronomo() {

  const idTerreno = document.getElementById("getDatiSensoriAgronomoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriAgronomo(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriAgronomo").innerHTML = "Data: " + /*JSON.stringify(result)*/ "\nSuperficie: " + result[0] + "\nUmidità: " + result[1] +
		"\nTemperatura: " + result[2] + "\nPioggia: " +result[3];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//Viticoltore
function getDataRaccolta() {

  const idTerreno = document.getElementById("getDataRaccoltaIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDataRaccolta(idTerreno).call({ from: currentAddress,
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

function getDatiForniture() {

  const idTerreno = document.getElementById("getDatiFornitureIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiForniture(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultDatiForniture").innerHTML = "Data: " + result;
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

  const idTerreno = document.getElementById("getDestinazioneUvaIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDestinazioneUva(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
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

function getDatiVenditaViticoltore() {

  const idTerreno = document.getElementById("getDatiVenditaViticoltoreIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiVenditaViticoltore(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiVenditaViticoltore").innerHTML = "Data: " + "\nNome Prodotto: " + result[0] +
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

function getDatiSensoriViticoltore() {

  const idTerreno = document.getElementById("getDatiSensoriViticoltoreIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriViticoltore(idTerreno).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriViticoltore").innerHTML = "Data: " + /*JSON.stringify(result)*/ "\nQuantità Uva Raccolta: " + result[0] +
		"\nTipologia Uva: " + result[1] + "\nUmidità: " + result[2] + "\nTemperatura: " + result[3] + "\nQuantità Fertilizzanti: " + result[4];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//Produttore
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
privateFor: privateFor,})
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
privateFor: privateFor,})
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
privateFor: privateFor,})
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

//Imbottigliatore
function getSolfiti() {

  const idLotto = document.getElementById("getSolfitiIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getSolfiti(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultSolfiti").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getAllergeni() {

  const idLotto = document.getElementById("getAllergeniIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getAllergeni(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultAllergeni").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getLocalitaUve() {

  const idLotto = document.getElementById("getLocalitaUveIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getlocalitaUve(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultLocalitaUve").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

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

function getDatiSensoriImbottigliatore() {

  const idLotto = document.getElementById("getDatiSensoriImbottigliatoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriImbottigliatore(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultDatiSensoriImbottigliatore").innerHTML = "Data: " + /*JSON.stringify(result)*/ "\nQuantità Prodotto Ricevuto: " + result[0] +
		"\nQuantità Vino Imbottigliato: " + result[1] + "\nGradazione Alcolica: " + result[2];
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

//Distributore
function getDestinazione() {

  const idLotto = document.getElementById("getDestinazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDestinazione(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
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

function getDatiVenditaDistributore() {

  const idLotto = document.getElementById("getDatiVenditaDistributoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiVenditaDistributore(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
    document.getElementById("resultDatiVenditaDistributore").innerHTML = "Data: " + "\nPrezzo Vendita: " + result[0] +
		"\nNome Prodotto: " + result[1] + "\nQuantità: " + result[2] + "\nNome Cliente: " + result[3] + "\nData Vendita: " + result[4];
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

//Rivenditore
function getDatiSensoriRivenditore() {

  const idLotto = document.getElementById("getDatiSensoriRivenditoreIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriRivenditore(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
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
