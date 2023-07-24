// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

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
          "name": "_solfiti",
          "type": "string"
        }
      ],
      "name": "setSolfiti",
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
      "name": "queryQuantitaProdottoRicevutaPerLotto",
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
      "name": "queryQuantitaVinoImbottigliataPerLotto",
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
      "name": "getIdSolfitiSerial",
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
      "name": "getIdAllergeniSerial",
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
      "name": "getIdLocalitaUveSerial",
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
      "name": "getIdCodiceBarreSerial",
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
      "name": "getAllergeni",
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
      "name": "getlocalitaUve",
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
      "name": "getCodiceBarre",
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
      "name": "getListaProdottiVinificazione",
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
    }
  ];

console.log('Contract address:', ImbottigliatoreContractAddr);
   
const contract = new web3.eth.Contract(abi, ImbottigliatoreContractAddr);

let myChart = null; // Variable to store the chart instance

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

// Function to generate chart using Chart.js library
function generateChartQuantitaRicevuta() {
  // Call the query function of the smart contract
  web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.queryQuantitaProdottoRicevutaPerLotto().call({ from: currentAddress,
    privateFor: privateFor,})
    .then(function(result) {
      const resultQuantita = result[0];
      const resultLotti = result[1];

      // Retrieve the chart canvas element
      const chartCanvas = document.getElementById("chart").getContext('2d');

      // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }

      // Create an array of labels for the x-axis
      const labels = resultLotti.map((value, index) => value);

      // Create an array of data for the y-axis
      const data = resultQuantita.map((value) => parseInt(value));

      // Create a new chart using Chart.js
      myChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Vino Ricevuto',
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
          		text: 'Lotti'
        		}
			},
            y: {
              beginAtZero: true,
			  title: {
				display: true,
				text: 'Quantita (L)'
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


function generateChartVinoImbottigliato() {
    // Call the query function of the smart contract
	web3.eth.getAccounts()
	.then(function(accounts) {
		const currentAddress = accounts[0];
    contract.methods.queryQuantitaVinoImbottigliataPerLotto().call({ from: currentAddress,
		privateFor: privateFor,})
      .then(function(result) {
        const resultQuantita = result[0];
        const resultLotti = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');

        // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }
  
        // Create an array of labels for the x-axis
        const labels = resultLotti.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultQuantita.map((value) => parseInt(value));
  
        // Create a new chart using Chart.js
        myChart = new Chart(chartCanvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Vino Imbottigliato',
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
					  text: 'Lotti'
					}
				},
				y: {
				  beginAtZero: true,
				  title: {
					display: true,
					text: 'Quantita (L)'
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


