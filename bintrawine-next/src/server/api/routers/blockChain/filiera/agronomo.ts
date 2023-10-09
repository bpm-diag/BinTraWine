import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { AgronomoAbi, SimulatoreSensori } from '@/server/api/routers/blockChain/filiera/abis';
import { AgronomoSchema, AgronomoSchemaForm, AgronomoSensoriSchemaForm } from '@/types/chainTypes';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';
import { getRandomNumber } from '@/utils/utilsFunctions';
import { ChartData } from '@/types/chainTypes';

const web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.NODE_IP}:22006`));

const contract = new web3.eth.Contract(AgronomoAbi, contracts.agronomo);
const sensoriContract = new web3.eth.Contract(SimulatoreSensori, contracts.simulatoreSensori);

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
	sendSensori: publicProcedure
		.input(z.number())
		.mutation(async ({ input, ctx }) => {
			return await web3.eth.getAccounts()
				.then(async (accounts) => {
					const [currentAddress, ...other] = accounts;
					// send agronomo data
					const sensoriAgronomo = await sensoriContract.methods.setSensoriAgronomo(input, String(getRandomNumber(5000)), String(getRandomNumber(90)), String(getRandomNumber(30)), String(getRandomNumber(5))).send({ from: currentAddress, privateFor: privateFor })
					return { sensoriAgronomo };
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
	console.log("getAgronomoIDLotto")
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;
			const data = await contract.methods.getIdAnalisiQualitaSerial().call({ from: currentAddress, privateFor: privateFor }) as number
			return data;
		})
		.catch((error) => {
			console.log("ERROR on getAgronomoIDLotto")
			console.error("ERROR", error);
		})
}

export const setSensoriAgronomo = (input: number) => {
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;
			// send agronomo data
			const sensoriAgronomo = await sensoriContract.methods.setSensoriAgronomo(input, String(getRandomNumber(5000)), String(getRandomNumber(90)), String(getRandomNumber(30)), String(getRandomNumber(5))).send({ from: currentAddress, privateFor: privateFor })
			return { sensoriAgronomo };
		})
		.catch((error) => {
			console.error("ERROR", error);
		})
}

export const getSensoriAgronomo = (input: number): Promise<undefined | AgronomoSensoriSchemaForm> => {
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;
			const data = await contract.methods.getDatiSensoriAgronomo(input).call({ from: currentAddress, privateFor: privateFor })
			const superficie = data['0'] as string
			const umidita = data['1'] as string
			const temperatura = data['2'] as string
			const pioggia = data['3'] as string
			return {
				superficie: superficie,
				umidita: umidita,
				temperatura: temperatura,
				pioggia: pioggia
			};
		})
		.catch((error) => {
			console.error("ERROR", error);
			return undefined
		})

}

export const getAgronomoAnalytics = (): Promise<undefined | ChartData[]> => {
	return web3.eth.getAccounts()
		.then(async (accounts) => {
			const [currentAddress, ...other] = accounts;

			const agronomoChartData: ChartData[] = []

			const superficiePerTerreno = await contract.methods.querySuperficiePerTerreno().call({ from: currentAddress, privateFor: privateFor })
			const temperaturaPerTerreno = await contract.methods.queryTemperaturaPerTerreno().call({ from: currentAddress, privateFor: privateFor })
			const pioggiaPerTerreno = await contract.methods.queryPioggiaPerTerreno().call({ from: currentAddress, privateFor: privateFor })
			const umiditaPerTerreno = await contract.methods.queryUmiditaPerTerreno().call({ from: currentAddress, privateFor: privateFor })

			agronomoChartData.push({
				title: "Superficie per terreno",
				labels: superficiePerTerreno['1'] as string[],
				values: (superficiePerTerreno['0'] as string[]).map((value) => parseInt(value)) as number[]
			})

			agronomoChartData.push({
				title: "Temperatura per terreno",
				labels: temperaturaPerTerreno['1'] as string[],
				values: (temperaturaPerTerreno['0'] as string[]).map((value) => parseInt(value)) as number[]
			})

			agronomoChartData.push({
				title: "Pioggia per terreno",
				labels: pioggiaPerTerreno['1'] as string[],
				values: (pioggiaPerTerreno['0'] as string[]).map((value) => parseInt(value)) as number[]
			})

			agronomoChartData.push({
				title: "Umidità per terreno",
				labels: umiditaPerTerreno['1'] as string[],
				values: (umiditaPerTerreno['0'] as string[]).map((value) => parseInt(value)) as number[]
			})

			return agronomoChartData
		})
		.catch((error) => {
			console.error("ERROR", error);
			return undefined
		})
}