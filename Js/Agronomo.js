// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));
//const web3 = new Web3(window.ethereum);

const abi = [
	{
		"inputs": [],
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
		"inputs": [],
		"name": "getIdAnalisiQualitaSerial",
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
		"name": "getIdCertificazioneUvaAppezzamentoSerial",
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
		"name": "getMappingTerreniLength",
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
		"name": "queryPioggiaPerTerreno",
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
		"name": "querySuperficiePerTerreno",
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
		"name": "queryTemperaturaPerTerreno",
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
		"name": "queryUmiditaPerTerreno",
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
				"name": "_analisiQualitaProdotto",
				"type": "string"
			}
		],
		"name": "setAnalisiQualitaProdotto",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificazioneUvaAppezzamento",
				"type": "string"
			}
		],
		"name": "setCertificazioneUvaAppezzamento",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idTerreno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_superficie",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_umiditaTerreno",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_temperaturaTerreno",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pioggia",
				"type": "string"
			}
		],
		"name": "setSensoriAgronomo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

//testing

//fine testing

//const contracAddress = "0x081961E8161753A1D94715ec763A7A12fDbE6b41";

//fetch from JSON

//const contracAddress = ;
console.log('Contract address:', AgronomoContractAddr);
   
const contract = new web3.eth.Contract(abi, AgronomoContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
function addAuthorized() {

	const viticoltoreContractAddress = document.getElementById("viticoltoreContractAddress").value;

	web3.eth.getAccounts()
     .then(function(accounts) {
       const currentAddress = accounts[0];
	contract.methods.addAuthorized(viticoltoreContractAddress).send({from: currentAddress,
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

const idTerrenoAnalisi = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdAnalisiQualitaSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idTerrenoShow = document.getElementById("setAnalisiQualitaProdottoIdTerreno");
			idTerrenoShow.value = result;
      // Display the result on the web page
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  });



function setAnalisiQualitaProdotto() {
  // Get the input value
  const analisiQualitaProdotto = document.getElementById("setAnalisiQualitaProdotto").value;

	web3.eth.getAccounts()
     .then(function(accounts) {
       const currentAddress = accounts[0];
  // Call the setData function of the smart contract
  contract.methods.setAnalisiQualitaProdotto(analisiQualitaProdotto).send({from: currentAddress/*"0xCC71C7546429a13796cf1BF9228bFf213e7Ae9cc"*/,
privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });

	contract.methods.getIdAnalisiQualitaSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setAnalisiQualitaProdottoIdTerreno");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idTerrenoAppezzamento = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdCertificazioneUvaAppezzamentoSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idTerrenoShow = document.getElementById("setCertificazioneUvaAppezzamentoIdTerreno");
			idTerrenoShow.value = result;
      // Display the result on the web page
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  });

function setCertificazioneUvaAppezzamento() {
  // Get the input value
  const certificazioneUvaAppezzamento = document.getElementById("setCertificazioneUvaAppezzamento").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	// Call the setData function of the smart contract
  contract.methods.setCertificazioneUvaAppezzamento(certificazioneUvaAppezzamento).send({ from: currentAddress,
	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });

	contract.methods.getIdCertificazioneUvaAppezzamentoSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setCertificazioneUvaAppezzamentoIdTerreno");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

// Function to get data from the smart contract
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
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	// Call the getData function of the smart contract
  contract.methods.getCertificazioneUvaAppezzamento(idTerreno).call({ from: currentAddress,
 		privateFor: privateFor, })
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

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	// Call the getData function of the smart contract
  contract.methods.getDatiSensoriAgronomo(idTerreno).call({ from: currentAddress,
 	privateFor: privateFor, })
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


