// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
/*const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_agronomoContractAddress",
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
        "internalType": "string",
        "name": "_dataRaccolta",
        "type": "string"
      }
    ],
    "name": "setDataRaccolta",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_datiForniture",
        "type": "string"
      }
    ],
    "name": "setDatiForniture",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_destinazioneUva",
        "type": "string"
      }
    ],
    "name": "setDestinazioneUva",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_nomeProdotto",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_prezzoVendita",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_quantita",
        "type": "string"
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
    "name": "setVendita",
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
        "name": "_quantitaUvaRaccolta",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tipologiaUva",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_umidita",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_temperatura",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_quantitaFertilizzanti",
        "type": "string"
      }
    ],
    "name": "setSensoriViticoltore",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "queryDataUvaRaccolta",
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getIdDataRaccoltaSerial",
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
    "name": "getIdDatiFornitureSerial",
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
    "name": "getIdDestinazioneUvaSerial",
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
    "name": "getIdVenditaSerial",
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idTerreno",
        "type": "uint256"
      }
    ],
    "name": "getUmiditaTerreno",
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
        "name": "_idTerreno",
        "type": "uint256"
      }
    ],
    "name": "getTemperaturaTerreno",
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
        "name": "_idTerreno",
        "type": "uint256"
      }
    ],
    "name": "getPioggiaTerreno",
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
        "name": "_idTerreno",
        "type": "uint256"
      }
    ],
    "name": "getSuperficieTerreno",
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
  }
];*/

const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_agronomoContractAddress",
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
		"name": "getIdDataRaccoltaSerial",
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
		"name": "getIdDatiFornitureSerial",
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
		"name": "getIdDestinazioneUvaSerial",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idTerreno",
				"type": "uint256"
			}
		],
		"name": "getPioggiaTerreno",
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
		"name": "getSuperficieTerreno",
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
		"name": "getTemperaturaTerreno",
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
		"name": "getUmiditaTerreno",
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
		"name": "queryDataUvaRaccolta",
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
				"name": "_dataRaccolta",
				"type": "string"
			}
		],
		"name": "setDataRaccolta",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_datiForniture",
				"type": "string"
			}
		],
		"name": "setDatiForniture",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_destinazioneUva",
				"type": "string"
			}
		],
		"name": "setDestinazioneUva",
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
				"name": "_quantitaUvaRaccolta",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tipologiaUva",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_umidita",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_temperatura",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quantitaFertilizzanti",
				"type": "string"
			}
		],
		"name": "setSensoriViticoltore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nomeProdotto",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_prezzoVendita",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quantita",
				"type": "string"
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
		"name": "setVendita",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

console.log('Contract address:', ViticoltoreContractAddr);
   
const contract = new web3.eth.Contract(abi, ViticoltoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

// Function to set data in the smart contract
function addAuthorized() {

	const produttoreContractAddress = document.getElementById("produttoreContractAddress").value;

	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.addAuthorized(produttoreContractAddress).send({from: currentAddress,
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

const idTerrenoDataRaccolta = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdDataRaccoltaSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idTerrenoShow = document.getElementById("setDataRaccoltaIdTerreno");
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

function setDataRaccolta() {
  // Get the input value
  const dataRaccolta = document.getElementById("setDataRaccolta").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.setDataRaccolta(dataRaccolta).send({ from: currentAddress,
privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });

	contract.methods.getIdDataRaccoltaSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setDataRaccoltaIdTerreno");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idTerrenoDatiForniture = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdDatiFornitureSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idTerrenoShow = document.getElementById("setDatiFornitureIdTerreno");
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

function setDatiForniture() {
  // Get the input value
  const datiForniture = document.getElementById("setDatiForniture").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.setDatiForniture(datiForniture).send({ from: currentAddress,
	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdDatiFornitureSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setDatiFornitureIdTerreno");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idTerrenoDestinazioneUva = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdDestinazioneUvaSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idTerrenoShow = document.getElementById("setDestinazioneUvaIdTerreno");
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

function setDestinazioneUva() {
  // Get the input value
  const destinazioneUva = document.getElementById("setDestinazioneUva").value;

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setDestinazioneUva(destinazioneUva).send({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(receipt) {
    console.log(receipt);
  })
  .catch(function(error) {
    console.error(error);
  });
	contract.methods.getIdDestinazioneUvaSerial().call({ from: currentAddress,
	privateFor: privateFor, })
	.then(function(result) {
		console.log(result);
		const idTerrenoShow = document.getElementById("setDestinazioneUvaIdTerreno");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

const idVendita = web3.eth.getAccounts()
  .then(function(accounts) {
    const currentAddress = accounts[0];
    contract.methods.getIdVenditaSerial().call({ from: currentAddress,
    privateFor: privateFor, })
    .then(function(result) {
      console.log(result);
			const idVenditaShow = document.getElementById("setVenditaId");
			idVenditaShow.value = result;
      // Display the result on the web page
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  });

function setVendita() {
  // Get the input value
  const nomeProdotto = document.getElementById("nomeProdottoVendita").value;
	const prezzoVendita = document.getElementById("prezzoVendita").value;
	const quantita = document.getElementById("quantitaVendita").value;
	const nomeCliente = document.getElementById("nomeClienteVendita").value;
	const dataVendita = document.getElementById("dataVendita").value;
	const addressesInput = document.getElementById("addressesVendite");
	const addresses = addressesInput.value.split(",");

  // Call the setData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.setVendita(nomeProdotto, prezzoVendita, quantita, nomeCliente, dataVendita, addresses).send({ from: currentAddress,
		privateFor: privateFor, })
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
		const idTerrenoShow = document.getElementById("setVenditaId");
		idTerrenoShow.value = result;
		// Display the result on the web page
	})

})
 .catch(function(error) {
	 console.error(error);
 });
}

// Function to get data from the smart contract
function getDataRaccolta() {

  const idTerreno = document.getElementById("getDataRaccoltaIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
	contract.methods.getDataRaccolta(idTerreno).call({ from: currentAddress,
 privateFor: privateFor,})
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
	privateFor: privateFor, })
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

function getDatiVendita() {

  const idTerreno = document.getElementById("getDatiVenditaIdVendita").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiVendita(idTerreno).call({ from: currentAddress,
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

function getDatiSensoriViticoltore() {

  const idTerreno = document.getElementById("getDatiSensoriViticoltoreIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getDatiSensoriViticoltore(idTerreno).call({ from: currentAddress,
		privateFor: privateFor, })
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

//get da Agronomo
function getUmiditaTerreno() {

  const idTerreno = document.getElementById("getUmiditaTerrenoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getUmiditaTerreno(idTerreno).call({ from: currentAddress,
	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultUmiditaTerreno").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getTemperaturaTerreno() {

  const idTerreno = document.getElementById("getTemperaturaTerrenoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getTemperaturaTerreno(idTerreno).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultTemperaturaTerreno").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getPioggiaTerreno() {

  const idTerreno = document.getElementById("getPioggiaTerrenoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getPioggiaTerreno(idTerreno).call({ from: currentAddress,
		privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultPioggiaTerreno").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}

function getSuperficieTerreno() {

  const idTerreno = document.getElementById("getSuperficieTerrenoIdTerreno").value;
  // Call the getData function of the smart contract
	web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.getSuperficieTerreno(idTerreno).call({ from: currentAddress,
 	privateFor: privateFor, })
  .then(function(result) {
    console.log(result);
    // Display the result on the web page
		document.getElementById("resultSuperficieTerreno").innerHTML = "Data: " + result;
  })
  .catch(function(error) {
    console.error(error);
  });
})
 .catch(function(error) {
	 console.error(error);
 });
}
