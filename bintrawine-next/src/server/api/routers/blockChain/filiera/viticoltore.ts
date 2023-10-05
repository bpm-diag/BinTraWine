import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { ViticoltoreSchema, ViticoltoreSchemaForm, ViticoltoreSensoriSchemaForm, AgronomoInViticoltoreData } from '@/types/chainTypes';
import { ViticoltoreAbi, SimulatoreSensori } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';
import { ChartData } from '@/types/chainTypes';

const web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.SERVER_IP}:22006`));

const contract = new web3.eth.Contract(ViticoltoreAbi, contracts.vitcoltore);
const sensoriContract = new web3.eth.Contract(SimulatoreSensori, contracts.simulatoreSensori);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const viticoltoreRouter = createTRPCRouter({
    send: publicProcedure
        .input(ViticoltoreSchema)
        .mutation(async ({ input, ctx }) => {
            return await web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    // send viticoltore data
                    const dataRaccolta = await contract.methods.setDataRaccolta(input.dataRaccolta).send({ from: currentAddress, privateFor: privateFor })
                    const datiForniture = await contract.methods.setDatiForniture(input.datiForniture).send({ from: currentAddress, privateFor: privateFor })
                    const destinazioneUva = await contract.methods.setDestinazioneUva(input.destinazioneUva).send({ from: currentAddress, privateFor: privateFor })
                    const datiVendita = await contract.methods.setVendita(input.nomeProdotto, input.prezzo, input.quantitaVendita, input.nomeClienteVendita, input.dataVendita, input.viticoltoreAddress ? [contracts.produttore] : [currentAddress]).send({ from: currentAddress, privateFor: privateFor })

                    return {
                        dataRaccolta: dataRaccolta,
                        datiForniture: datiForniture,
                        destinazioneUva: destinazioneUva,
                        datiVendita: datiVendita
                    }
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});

export const getManualViticoltoreData = (input: number): Promise<void | { viticoltore: ViticoltoreSchemaForm, agronomoData: AgronomoInViticoltoreData }> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const dataRaccolta = await contract.methods.getDataRaccolta(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiForniture = await contract.methods.getDatiForniture(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const destinazioneUva = await contract.methods.getDestinazioneUva(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiVendita = await contract.methods.getDatiVendita(input).call({ from: currentAddress, privateFor: privateFor })

            // dati agronomo
            const superficieTerreno = await contract.methods.getSuperficieTerreno(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const umiditaTerreno = await contract.methods.getUmiditaTerreno(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const temperaturaTerreno = await contract.methods.getTemperaturaTerreno(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const pioggiaTerreno = await contract.methods.getPioggiaTerreno(input).call({ from: currentAddress, privateFor: privateFor }) as string

            const nomeProdotto = datiVendita['0'] as string
            const prezzoVendita = datiVendita['1'] as string
            const quantitaVendita = datiVendita['2'] as string
            const nomeCliente = datiVendita['3'] as string
            const dataVendita = datiVendita['4'] as string

            const retrievedData = {
                viticoltore: {
                    dataRaccolta: dataRaccolta,
                    datiForniture: datiForniture,
                    destinazioneUva: destinazioneUva,
                    nomeProdotto: nomeProdotto,
                    prezzo: prezzoVendita,
                    quantitaVendita: quantitaVendita,
                    nomeClienteVendita: nomeCliente,
                    dataVendita: dataVendita,
                    viticoltoreAddress: false
                },
                agronomoData: {
                    superficieTerreno: superficieTerreno,
                    umiditaTerreno: umiditaTerreno,
                    temperaturaTerreno: temperaturaTerreno,
                    pioggiaTerreno: pioggiaTerreno
                }
            }

            return retrievedData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getViticoltoreIDLotto = (): Promise<void | number> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getIdDataRaccoltaSerial().call({ from: currentAddress, privateFor: privateFor }) as number
            return data;
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getSensoriViticoltore = (input: number): Promise<void | ViticoltoreSensoriSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getDatiSensoriViticoltore(input).call({ from: currentAddress, privateFor: privateFor })
            const quantitaUvaRaccolta = "1000"// data['0'] as string
            const tipologiaUva = "nera" // data['1'] as string
            const umidita = "44" // data['2'] as string
            const temperatura = "24" // data['3'] as string
            const quantitaFertilizzanti = "200" // data['4'] as string

            return {
                quantitaUvaRaccolta: quantitaUvaRaccolta,
                tipologiaUva: tipologiaUva,
                umidita: umidita,
                temperatura: temperatura,
                quantitaFertilizzanti: quantitaFertilizzanti
            };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const setSensoriViticoltore = (input: number) => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            // send agronomo data
            const sensoriViticoltore = await sensoriContract.methods.setSensoriViticoltore(input, "quantita uva raccolta", "tipologia", "umidita", "temperatura", "quantita fertilizzanti").send({ from: currentAddress, privateFor: privateFor })
            return { sensoriViticoltore };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getViticoltoreAnalytics = (): Promise<void | ChartData[]> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;

            const viticoltoreChartData: ChartData[] = []

            const dataUvaRaccolta = await contract.methods.queryDataUvaRaccolta().call({
                from: currentAddress,
                privateFor: privateFor,
            })

            const nomiClientiQuantita = await contract.methods.queryNomiClientiQuantita().call({
                from: currentAddress,
                privateFor: privateFor,
            })

            viticoltoreChartData.push({
                title: "Data uva raccolta",
                labels: dataUvaRaccolta['0'] as string[],
                values: (dataUvaRaccolta['1'] as string[]).map((value) => parseInt(value)) as number[]
            })

            viticoltoreChartData.push({
                title: "Nomi clienti quantità",
                labels: nomiClientiQuantita['0'] as string[],
                values: (nomiClientiQuantita['1'] as string[]).map((value) => parseInt(value)) as number[]
            })

            return viticoltoreChartData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}