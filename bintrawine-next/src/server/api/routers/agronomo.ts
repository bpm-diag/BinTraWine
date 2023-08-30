import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { env } from "@/env.mjs";

const abi: AbiItem[] = [
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

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(abi, "0x60ED79B615Ec9aFD4250c94D67bCf8b67D07Dca1");

const AgronomoSchema = z.object({
	analisiQualitàProdotto: z.string().min(1),
	certificazioneUvaAppezzamento: z.string().min(1),
});

const privateFor: string[] = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
	"1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
	"UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const agronomoRouter = createTRPCRouter({
	send: publicProcedure
		.input(AgronomoSchema)
		.mutation(async ({ input, ctx }) => {
			return await web3.eth.getAccounts()
				.then(async (accounts) => {
					const [currentAddress, ...other] = accounts;
					console.log(currentAddress);
					const data = await contract.methods.setAnalisiQualitaProdotto(input.analisiQualitàProdotto).send({ from: currentAddress, privateFor: privateFor })
					return data;
				})
				.catch((error) => {
					console.error("ERROR", error);
				})
		}),

	getAnalisiQualitàProdotto: publicProcedure
		.query(async ({ ctx }) => {
			return await web3.eth.getAccounts()
				.then(async (accounts) => {
					const [currentAddress, ...other] = accounts;
					const l = await contract.methods.querySuperficiePerTerreno().call({ from: currentAddress, privateFor: privateFor, })
					console.log(l);
					const data = await contract.methods.getAnalisiQualitaProdotto(6).call({ from: currentAddress, privateFor: privateFor, })
					return data;
				})
				.catch((error) => {
					console.error("ERROR", error);
				})
		})
});