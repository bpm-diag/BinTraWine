import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { AgronomoAbi } from '@/server/api/routers/blockChain/filiera/abis';
import { AgronomoSchema, AgronomoSchemaForm } from '@/types/chainTypes';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(AgronomoAbi, contracts.agronomo);

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
					// send agronomo data
					const qualitaProdotto = await contract.methods.setAnalisiQualitaProdotto(input.analisiQualitàProdotto).send({ from: currentAddress, privateFor: privateFor })
					const certificazioneUva = await contract.methods.setCertificazioneUvaAppezzamento(input.certificazioneUvaAppezzamento).send({ from: currentAddress, privateFor: privateFor })
					return { qualitaProdotto, certificazioneUva };
				})
				.catch((error) => {
					console.error("ERROR", error);
				})
		}),

	getNumberOfChains: publicProcedure
		.query(async ({ ctx }) => {
			return await web3.eth.getAccounts()
				.then(async (accounts) => {
					const [currentAddress, ...other] = accounts;
					const data = await contract.methods.getIdAnalisiQualitaSerial().call({ from: currentAddress, privateFor: privateFor }) as number
					return data;
				})
				.catch((error) => {
					console.error("ERROR", error);
				})
		})
});

export const getManualAgronomoData = (input: number): Promise<void | AgronomoSchemaForm> => {
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;
			const analisiQualitàProdotto = await contract.methods.getAnalisiQualitaProdotto(input).call({ from: currentAddress, privateFor: privateFor }) as string
			const certificazioneUvaAppezzamento = await contract.methods.getCertificazioneUvaAppezzamento(input).call({ from: currentAddress, privateFor: privateFor }) as string

			const retrievedData: AgronomoSchemaForm = {
				analisiQualitàProdotto: analisiQualitàProdotto,
				certificazioneUvaAppezzamento: certificazioneUvaAppezzamento
			};

			return retrievedData
		})
		.catch((error) => {
			console.error("ERROR", error);
		})
}

export const getAgronomoIDLotto = (): Promise<void | number> => {
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;
			const data = await contract.methods.getIdAnalisiQualitaSerial().call({ from: currentAddress, privateFor: privateFor }) as number
			return data;
		})
		.catch((error) => {
			console.error("ERROR", error);
		})
}