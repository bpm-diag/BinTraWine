// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

const abi = [
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
				"internalType": "uint256",
				"name": "_idTerreno",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_quantitaUvaRaccolta",
				"type": "uint256"
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
		"name": "setVendita",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
	}
];

const contractAddress = "0x6De57b0B1e00b069Af3921CfEA1794C2559852D1"; // Replace with the contract address

const contract = new web3.eth.Contract(abi, contractAddress);

let myChart = null; // Variable to store the chart instance

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

// Function to generate chart using Chart.js library
function generateChart() {
  // Call the queryDataUvaRaccolta function of the smart contract
  web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.queryDataUvaRaccolta().call({ from: currentAddress,
    privateFor: privateFor,})
    .then(function(result) {
      const resultData = result[0];
      const resultQuantitaRaccolta = result[1];

      // Retrieve the chart canvas element
      const chartCanvas = document.getElementById("chart").getContext('2d');

      // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }

      // Create an array of labels for the x-axis
      const labels = resultData.map((value, index) => value);

      // Create an array of data for the y-axis
      const data = resultQuantitaRaccolta.map((value) => parseInt(value));

      // Create a new chart using Chart.js
      myChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Quantita Raccolta',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
				beginAtZero: true,
        		title: {
          		display: true,
          		text: 'Data Raccolta'
        		}
			},
            y: {
              beginAtZero: true,
			  title: {
				display: true,
				text: 'Quantita (kg)'
			  }
            }
          }
        }
      });
    })
    .catch(function(error) {
      console.error(error);
    });
  });
}


function generateChartVendite() {
    // Call the queryDataUvaRaccolta function of the smart contract
    contract.methods.queryNomiClientiQuantita().call()
      .then(function(result) {
        const resultNomi = result[0];
        const resultQuantita = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');

        // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }
  
        // Create an array of labels for the x-axis
        const labels = resultNomi.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultQuantita.map((value) => parseInt(value));
  
        // Create a new chart using Chart.js
        myChart = new Chart(chartCanvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Quantita Venduta',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
				x: {
					beginAtZero: true,
					title: {
					  display: true,
					  text: 'Nomi Clienti'
					}
				},
				y: {
				  beginAtZero: true,
				  title: {
					display: true,
					text: 'Quantita (Kg)'
				  }
				}
            }
          }
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }


