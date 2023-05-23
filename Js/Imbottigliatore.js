// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_produttoreContractAddress",
				"type": "address"
			},
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
		"name": "getIdAllergeniSerial",
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
		"name": "getIdCodiceBarreSerial",
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
		"name": "getIdLocalitaUveSerial",
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
		"name": "getIdSolfitiSerial",
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
		"name": "getListaProdottiVinificazione",
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
				"name": "_allergeni",
				"type": "string"
			}
		],
		"name": "setAllergeni",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_codiceBarre",
				"type": "string"
			}
		],
		"name": "setCodiceBarre",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_localitaUve",
				"type": "string"
			}
		],
		"name": "setLocalitaUve",
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
				"name": "_quantitaProdottoRicevuta",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quantitaVinoImbottigliata",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gradazioneAlcolica",
				"type": "string"
			}
		],
		"name": "setSensoriImbottigliatore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_solfiti",
				"type": "string"
			}
		],
		"name": "setSolfiti",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

console.log('Contract address:', ImbottigliatoreContractAddr);
   
const contract = new web3.eth.Contract(abi, ImbottigliatoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
function addAuthorized() {

	const distributoreContractAddress = document.getElementById("distributoreContractAddress").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.addAuthorized(distributoreContractAddress).send({from: currentAddress,
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

const idLottoSolfiti = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdSolfitiSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setSolfitiIdLotto");
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

function setSolfiti() {
  // Get the input value

  const solfiti = document.getElementById("setSolfiti").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setSolfiti(solfiti).send({ from: currentAddress,
privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdSolfitiSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setSolfitiIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoAllergeni = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdAllergeniSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setAllergeniIdLotto");
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

function setAllergeni() {
  // Get the input value
  const idLotto = document.getElementById("setAllergeniIdLotto").value;
  const allergeni = document.getElementById("setAllergeni").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setAllergeni(allergeni).send({ from: currentAddress,
privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdAllergeniSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setAllergeniIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoLocalitaUve = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdLocalitaUveSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setLocalitaUveIdLotto");
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

function setLocalitaUve() {
  // Get the input value
  const idLotto = document.getElementById("setLocalitaUveIdLotto").value;
  const localitaUve = document.getElementById("setLocalitaUve").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setLocalitaUve(localitaUve).send({ from: currentAddress,
privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdLocalitaUveSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setLocalitaUveIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idLottoCodiceBarre = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdCodiceBarreSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idLottoShow = document.getElementById("setCodiceBarreIdLotto");
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

function setCodiceBarre() {
  // Get the input value
  const idLotto = document.getElementById("setCodiceBarreIdLotto").value;
  const codiceBarre = document.getElementById("setCodiceBarre").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setCodiceBarre(codiceBarre).send({ from: currentAddress,
privateFor: privateFor,})
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdCodiceBarreSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setCodiceBarreIdLotto");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

// Function to get data from the smart contract
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
privateFor: privateFor, })
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

//get da Produttore
function getListaProdottiVinificazione() {

  const idLotto = document.getElementById("getListaProdottiVinificazioneIdLotto").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getListaProdottiVinificazione(idLotto).call({ from: currentAddress,
privateFor: privateFor,})
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultListaProdottiVinificazione").innerHTML = "Data: " + result;
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
