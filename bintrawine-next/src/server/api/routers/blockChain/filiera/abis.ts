import { AbiItem } from 'web3-utils';

export const AgronomoAbi: AbiItem[] = [
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

export const ViticoltoreAbi: AbiItem[] = [
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

export const ProduttoreAbi: AbiItem[] = [
    {
        "inputs": [
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
        "name": "getIdProdottiVinificazioneSerial",
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
        "name": "getIdQuantitaVinoOttenutoSerial",
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
        "name": "getIdQuantitaVinoRivendicatoSerial",
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
        "name": "getMappaLottiLength",
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
        "name": "getPesoViticoltore",
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
        "name": "getTipologiaUva",
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
        "name": "queryVinoOttenutoPerLotto",
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
        "name": "queryVinoRivendicatoPerLotto",
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
                "internalType": "string",
                "name": "_quantitaVinoOttenuto",
                "type": "string"
            }
        ],
        "name": "setQuantitaVinoOttenuto",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_quantitaVinoRivendicato",
                "type": "string"
            }
        ],
        "name": "setQuantitaVinoRivendicato",
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
                "name": "_pesoArrivo",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_pesoProdottoFinito",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_idContainer",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_temperaturaContainer",
                "type": "string"
            }
        ],
        "name": "setSensoriProduttore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const ImbottigliatoreAbi: AbiItem[] = [
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
        "type": "function"
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

export const DistributoreAbi: AbiItem[] = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_imbottigliatoreContractAddress",
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
        "inputs": [],
        "name": "getIdDestinazioneSerial",
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
        "name": "getMappaLottiLength",
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
        "inputs": [],
        "name": "queryQuantitaTrasportataPerLotto",
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
                "name": "_prezzoVendita",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_nomeProdotto",
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
        "name": "setDatiVendita",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_destinazione",
                "type": "string"
            }
        ],
        "name": "setDestinazione",
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
                "name": "_quantitaTrasportata",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_temperaturaTrasporto",
                "type": "string"
            }
        ],
        "name": "setSensoriDistributore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const RivenditoreAbi: AbiItem[] = [
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
        "type": "function"
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
                "internalType": "string",
                "name": "input",
                "type": "string"
            }
        ],
        "name": "splitString",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const EnteCertificatoreAbi: AbiItem[] = [
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

export const SimulatoreSensori: AbiItem[] = [
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
                "internalType": "uint256",
                "name": "_idLotto",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_pesoArrivo",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_pesoProdottoFinito",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_idContainer",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_temperaturaContainer",
                "type": "string"
            }
        ],
        "name": "setSensoriProduttore",
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
                "internalType": "uint256",
                "name": "_idLotto",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_quantitaTrasportata",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_temperaturaTrasporto",
                "type": "string"
            }
        ],
        "name": "setSensoriDistributore",
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
    }
]

export const customerAbi: AbiItem[] = [
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