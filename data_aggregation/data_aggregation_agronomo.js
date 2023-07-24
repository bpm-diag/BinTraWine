// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

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
      "type": "function",
      "constant": true
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
      "name": "getAnalisiQualitaProdotto",
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
      "name": "getCertificazioneUvaAppezzamento",
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    }
  ];

console.log('Contract address:', AgronomoContractAddr);
   
const contract = new web3.eth.Contract(abi, AgronomoContractAddr);

let myChart = null; // Variable to store the chart instance

//privateFor list per Quorum
const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

// Function to generate chart using Chart.js library
function generateChartSuperficie() {
  // Call the query function of the smart contract
  web3.eth.getAccounts()
		 .then(function(accounts) {
			 const currentAddress = accounts[0];
  contract.methods.querySuperficiePerTerreno().call({ from: currentAddress,
    privateFor: privateFor,})
    .then(function(result) {
      const resultSuperficie = result[0];
      const resultTerreni = result[1];

      // Retrieve the chart canvas element
      const chartCanvas = document.getElementById("chart").getContext('2d');

      // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }

      // Create an array of labels for the x-axis
      const labels = resultTerreni.map((value, index) => value);

      // Create an array of data for the y-axis
      const data = resultSuperficie.map((value) => parseInt(value));

      // Create a new chart using Chart.js
      myChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Superficie Vitata',
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
          		text: 'Terreni'
        		}
			},
            y: {
              beginAtZero: true,
			  title: {
				display: true,
				text: 'Superficie (mq)'
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

function generateChartTemperatura() {
    // Call the query function of the smart contract
    web3.eth.getAccounts()
           .then(function(accounts) {
               const currentAddress = accounts[0];
    contract.methods.queryTemperaturaPerTerreno().call({ from: currentAddress,
      privateFor: privateFor,})
      .then(function(result) {
        const resultTemperatura = result[0];
        const resultTerreni = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');
  
        // Destroy the existing chart if it exists
        if (myChart) {
          myChart.destroy();
        }
  
        // Create an array of labels for the x-axis
        const labels = resultTerreni.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultTemperatura.map((value) => parseInt(value));
  
        // Create a new chart using Chart.js
        myChart = new Chart(chartCanvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Temperatura Terreno',
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
                    text: 'Terreni'
                  }
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Temperatura (°)'
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

  function generateChartPioggia() {
    // Call the query function of the smart contract
    web3.eth.getAccounts()
           .then(function(accounts) {
               const currentAddress = accounts[0];
    contract.methods.queryPioggiaPerTerreno().call({ from: currentAddress,
      privateFor: privateFor,})
      .then(function(result) {
        const resultPioggia = result[0];
        const resultTerreni = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');
  
        // Destroy the existing chart if it exists
        if (myChart) {
          myChart.destroy();
        }
  
        // Create an array of labels for the x-axis
        const labels = resultTerreni.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultPioggia.map((value) => parseInt(value));
  
        // Create a new chart using Chart.js
        myChart = new Chart(chartCanvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Pioggia Terreno',
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
                    text: 'Terreni'
                  }
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Pioggia (mm)'
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


function generateChartUmidita() {
    // Call the query function of the smart contract
    web3.eth.getAccounts()
    .then(function(accounts) {
        const currentAddress = accounts[0];
contract.methods.queryUmiditaPerTerreno().call({ from: currentAddress,
privateFor: privateFor,})
      .then(function(result) {
        const resultUmidita = result[0];
        const resultTerreni = result[1];
  
        // Retrieve the chart canvas element
        const chartCanvas = document.getElementById("chart").getContext('2d');

        // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }
  
        // Create an array of labels for the x-axis
        const labels = resultTerreni.map((value, index) => value);
  
        // Create an array of data for the y-axis
        const data = resultUmidita.map((value) => parseInt(value));
  
        // Create a new chart using Chart.js
        myChart = new Chart(chartCanvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Umidita Terreno',
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
					  text: 'Terreno'
					}
				},
				y: {
				  beginAtZero: true,
				  title: {
					display: true,
					text: 'Umidita (%)'
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


