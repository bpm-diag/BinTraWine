import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import Web3 from 'web3';
import { ChartData } from '@/types/chainTypes';
import { DistributoreSchema, DistributoreSchemaForm, DistributoreSensoriSchemaForm, ImbottigliatoreInDistributoreData } from '@/types/chainTypes';
import { DistributoreAbi, SimulatoreSensori } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';
import { getRandomNumber } from '@/utils/utilsFunctions';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(DistributoreAbi, contracts.distributore);
const sensoriContract = new web3.eth.Contract(SimulatoreSensori, contracts.simulatoreSensori);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const distributoreRouter = createTRPCRouter({
    send: publicProcedure
        .input(DistributoreSchema)
        .mutation(async ({ input, ctx }) => {
            return await web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    // send imbottigliatore data
                    const destinazione = await contract.methods.setDestinazione(input.destinazioneDiConsegna).send({ from: currentAddress, privateFor: privateFor })
                    const datiVendita = await contract.methods.setDatiVendita(input.prezzo, input.nomeProdotto, input.quantitaVendita, input.nomeClienteVendita, input.dataVendita, input.distributoreAddress ? [contracts.rivenditore] : [currentAddress]).send({ from: currentAddress, privateFor: privateFor })
                    return {
                        destinazione: destinazione,
                        datiVendita: datiVendita
                    }
                })
                .catch((error) => {
                    console.error("ERROR SEND DISTRIB", error);
                })
        })
});

export const getManualDistributoreData = (input: number): Promise<void | { distributore: DistributoreSchemaForm, imbottigliatoreData: ImbottigliatoreInDistributoreData | undefined }> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const destinazione = await contract.methods.getDestinazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiVendita = await contract.methods.getDatiVendita(input).call({ from: currentAddress, privateFor: privateFor })
            const prezzoVendita = datiVendita['0'] as string
            const nomeProdotto = datiVendita['1'] as string
            const quantita = datiVendita['2'] as number
            const nomeCliente = datiVendita['3'] as string
            const dataVendita = datiVendita['4'] as string

            // dati imbottigliatore                    
            const codiceABarre = await contract.methods.getCodiceBarre(input).call({ from: currentAddress, privateFor: privateFor }) as string

            const retrievedData = {
                distributore: {
                    destinazioneDiConsegna: destinazione,
                    nomeProdotto: nomeProdotto,
                    prezzo: prezzoVendita,
                    quantitaVendita: quantita,
                    nomeClienteVendita: nomeCliente,
                    dataVendita: dataVendita,
                    distributoreAddress: false
                },
                imbottigliatoreData: {
                    codiceABarre: codiceABarre
                }
            }

            return retrievedData
        })
        .catch((error) => {

        })
}

export const getDistributoreIDLotto = (): Promise<void | number> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getIdDestinazioneSerial().call({ from: currentAddress, privateFor: privateFor }) as number
            return data;
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getSensoriDistributore = (input: number): Promise<void | DistributoreSensoriSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getDatiSensoriDistributore(input).call({ from: currentAddress, privateFor: privateFor })
            const quantitaTrasportata = data['0'] as string
            const temperaturaTrasporto = data['1'] as string
            return {
                quantitaTrasportata: quantitaTrasportata,
                temperaturaTrasporto: temperaturaTrasporto,
            };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const setSensoriDistributore = (input: number) => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            // send agronomo data
            const sensoriDistributore = await sensoriContract.methods.setSensoriDistributore(input, String(getRandomNumber(2000)), String(getRandomNumber(30))).send({ from: currentAddress, privateFor: privateFor })
            return { sensoriDistributore };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getDistributoreAnalytics = (): Promise<void | ChartData[]> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;

            const distributoreChartData: ChartData[] = []

            const quantitaTrasportataPerLotto = await contract.methods.queryQuantitaTrasportataPerLotto().call({
                from: currentAddress,
                privateFor: privateFor,
            })
            const nomiClientiQuantita = await contract.methods.queryNomiClientiQuantita().call({
                from: currentAddress,
                privateFor: privateFor,
            })

            distributoreChartData.push({
                title: "Quantita per lotto",
                labels: quantitaTrasportataPerLotto['1'] as string[],
                values: (quantitaTrasportataPerLotto['0'] as string[]).map((value) => Number(value)) as number[]
            })


            distributoreChartData.push({
                title: "Nomi clienti quantità",
                labels: nomiClientiQuantita['0'] as string[],
                values: (nomiClientiQuantita['1'] as string[]).map((value) => Number(value)) as number[]
            })

            return distributoreChartData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}