// Connect to Quorum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22006"));

const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_agronomoContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_ViticoltoreContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_produttoreContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_imbottigliatoreContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_distributoreContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_enteCertificatoreContractAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bottiglie",
    "outputs": [
      {
        "internalType": "string",
        "name": "certificazioneUvaAppezzamento",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dataRaccolta",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "datiForniture",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "destinazioneUva",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "prodottiVinificazione",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "solfiti",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "allergeni",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "gradazioneAlcolica",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "localitaUve",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "temperaturaTrasporto",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "validazione",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "certificazione",
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
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_gradazioneAlcolica",
        "type": "string"
      }
    ],
    "name": "setGradazioneAlcolica",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "name": "_idBottiglia",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_temperaturaTrasporto",
        "type": "string"
      }
    ],
    "name": "setTemperaturaTrasporto",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idbottiglia",
        "type": "uint256"
      },
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
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      },
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
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      }
    ],
    "name": "getCertificazioneAppezzamentoUva",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      }
    ],
    "name": "getGradazioneAlcolica",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      }
    ],
    "name": "getLocalitaUve",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
        "type": "uint256"
      }
    ],
    "name": "getTemperaturaTrasporto",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idBottiglia",
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
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

console.log('Contract address:', CustomerContractAddr);
   
const contract = new web3.eth.Contract(abi, CustomerContractAddr);

console.log(web3.eth.getAccounts());
const addresses = web3.eth.getAccounts();

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=","oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

//da Agronomo
    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getCertificazioneAppezzamentoUva(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("certificazioneUva");
        certificazioneUvaShow.innerHTML = "Certificazione Uva dell'Appezzamento: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

//da Viticoltore
web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getDataRaccolta(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("dataRaccolta");
        certificazioneUvaShow.innerHTML = "Data di raccolta dell'uva: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getDatiForniture(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("datiForniture");
        certificazioneUvaShow.innerHTML = "Forniture utilizzate in coltivazione: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getDestinazioneUva(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("destinazioneUva");
        certificazioneUvaShow.innerHTML = "Destinazione d'uso dell'uva: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    //da Produttore
    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getProdottiVinificazione(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("prodottiVinificazione");
        certificazioneUvaShow.innerHTML = "Prodotti utilizzati in fase di Vinificazione: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    //da Imbottigliatore
    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getSolfiti(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("solfiti");
        certificazioneUvaShow.innerHTML = "Presenza di solfiti: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getAllergeni(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("allergeni");
        certificazioneUvaShow.innerHTML = "Lista allergeni: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getLocalitaUve(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("localitaUve");
        certificazioneUvaShow.innerHTML = "Località di provenienza delle uve: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getGradazioneAlcolica(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("gradazioneAlcolica");
        certificazioneUvaShow.innerHTML = "Gradazione alcolica: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getAllergeni(1).call({ from: currentAddress,
        privateFor: privateFor,  })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("allergeni");
        certificazioneUvaShow.innerHTML = "Lista allergeni: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

//da Distributore
web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getTemperaturaTrasporto(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("temperaturaTrasporto");
        certificazioneUvaShow.innerHTML = "Temperatura durante il trasporto: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    //da Ente Certificatore
    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getValidazione(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("validazione");
        certificazioneUvaShow.innerHTML = "Validazione dell'ente: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });

    web3.eth.getAccounts()
    .then(function(accounts) {
      const currentAddress = accounts[0];
      contract.methods.getCertificazione(1).call({ from: currentAddress,
        privateFor: privateFor, })
      .then(function(result) {
        console.log(result);
        const certificazioneUvaShow = document.getElementById("certificazione");
        certificazioneUvaShow.innerHTML = "Certificazione dell'ente: " + result;
        // Display the result on the web page
      })
      .catch(function(error) {
        console.error(error);
      });
    })
    .catch(function(error) {
      console.error(error);
    });
  