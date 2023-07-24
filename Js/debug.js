// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

//const id = web3.eth.net.getId();
//const deployedNetwork = SimpleStorage.networks[id];
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
];

console.log('Contract address:', ViticoltoreContractAddr);
   
const contract = new web3.eth.Contract(abi, ViticoltoreContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

    function setDatiSensoriViticoltore() {
        // Get the input value
        const idTerreno = document.getElementById("idTerreno").value;
        const tipologia = document.getElementById("tipologia").value;
        const quantitaUvaRaccolta = document.getElementById("quantitaUvaRaccolta").value;
        const umidita = document.getElementById("umidita").value;
        const temperatura = document.getElementById("temperatura").value;
        const quantitaFertilizzanti = document.getElementById("quantitaFertilizzante").value;
      
        // Call the setData function of the smart contract
          web3.eth.getAccounts()
               .then(function(accounts) {
                   const currentAddress = accounts[0];
          contract.methods.setSensoriViticoltore(idTerreno, quantitaUvaRaccolta, tipologia, umidita, temperatura, quantitaFertilizzanti).send({ from: currentAddress,
      privateFor: privateFor, })
        .then(function(receipt) {
          console.log(receipt);
        })
        .catch(function(error) {
          console.error(error);
        });
    })
}