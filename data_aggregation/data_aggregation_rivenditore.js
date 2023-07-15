// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

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

let myChart = null; // Variable to store the chart instance

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

function generateChartTipologiaQuantita() {
    // Call the query function of the smart contract
	web3.eth.getAccounts()
	.then(function(accounts) {
		const currentAddress = accounts[0];
    contract.methods.queryTipologiaQuantita().call({ from: currentAddress,
		privateFor: privateFor,})
      .then(function(result) {
        const resultQuantita = result[0];
        const resultTipologia = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');

        // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }
  
        // Create an array of labels for the x-axis
        const labels = resultQuantita.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultTipologia.map((value) => parseInt(value));
  
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
					  text: 'Prodotti'
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


