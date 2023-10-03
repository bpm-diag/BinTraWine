import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { ChartData } from '@/types/chainTypes';
import Web3 from 'web3';
import { ImbottigliatoreSchema, ImbottigliatoreSchemaForm, ImbottigliatoreSensoriSchemaForm, ProduttoreInImbottigliatoreData, ViticoltoreInImbottigliatoreData } from '@/types/chainTypes';
import { ImbottigliatoreAbi, SimulatoreSensori } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';
import { getRandomNumber } from '@/utils/utilsFunctions';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(ImbottigliatoreAbi, contracts.imbottigliatore);
const sensoriContract = new web3.eth.Contract(SimulatoreSensori, contracts.simulatoreSensori);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const imbottigliatoreRouter = createTRPCRouter({
    send: publicProcedure
        .input(ImbottigliatoreSchema)
        .mutation(async ({ input, ctx }) => {
            return await web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    // send imbottigliatore data
                    const presenzaSolfiti = await contract.methods.setSolfiti(input.presenzaSolfiti).send({ from: currentAddress, privateFor: privateFor })
                    const presenzaAllergeni = await contract.methods.setAllergeni(input.presenzaAllergeni).send({ from: currentAddress, privateFor: privateFor })
                    const localitaUve = await contract.methods.setLocalitaUve(input.localitaUve).send({ from: currentAddress, privateFor: privateFor })
                    const codiceABarre = await contract.methods.setCodiceBarre(input.codiceAbarre).send({ from: currentAddress, privateFor: privateFor })

                    return {
                        presenzaSolfiti: presenzaSolfiti,
                        presenzaAllergeni: presenzaAllergeni,
                        localitaUve: localitaUve,
                        codiceABarre: codiceABarre
                    }
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});

export const getManualImbottigliatoreData = (input: number): Promise<void | { imbottigliatore: ImbottigliatoreSchemaForm, produttoreData: ProduttoreInImbottigliatoreData, viticoltoreData: ViticoltoreInImbottigliatoreData }> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;

            const presenzaSolfiti = await contract.methods.getSolfiti(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const presenzaAllergeni = await contract.methods.getAllergeni(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const localitaUve = await contract.methods.getlocalitaUve(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const codiceABarre = await contract.methods.getCodiceBarre(input).call({ from: currentAddress, privateFor: privateFor }) as string

            // dati produttore
            const prodottiVinificazione = await contract.methods.getListaProdottiVinificazione(input).send({ from: currentAddress, privateFor: privateFor }) as string
            // dati viticoltore
            const destinazioneUva = await contract.methods.getDestinazioneUva(input).send({ from: currentAddress, privateFor: privateFor }) as string

            const retrievedData = {
                imbottigliatore: {
                    presenzaSolfiti: presenzaSolfiti,
                    presenzaAllergeni: presenzaAllergeni,
                    localitaUve: localitaUve,
                    codiceAbarre: codiceABarre
                },
                produttoreData: {
                    prodottiVinificazione: prodottiVinificazione
                },
                viticoltoreData: {
                    destinazioneUva: destinazioneUva
                }
            }

            return retrievedData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getImbottigliatoreIDLotto = (): Promise<void | number> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getIdSolfitiSerial().call({ from: currentAddress, privateFor: privateFor }) as number
            return data;
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getSensoriImbottigliatore = (input: number): Promise<void | ImbottigliatoreSensoriSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getDatiSensoriImbottigliatore(input).call({ from: currentAddress, privateFor: privateFor })
            const quantitaProdottoRicevuta = data['0'] as string
            const quantitaVinoImbottigliata = data['1'] as string
            const gradazioneAlcolica = data['2'] as string
            return {
                quantitaProdottoRicevuta: quantitaProdottoRicevuta,
                quantitaVinoImbottigliata: quantitaVinoImbottigliata,
                gradazioneAlcolica: gradazioneAlcolica,
            };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const setSensoriImbottigliatore = (input: number) => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            // send agronomo data
            const sensoriImbottigliatore = await sensoriContract.methods.setSensoriImbottigliatore(input, String(getRandomNumber(1000)), String(getRandomNumber(800)), String(getRandomNumber(30))).send({ from: currentAddress, privateFor: privateFor })
            return { sensoriImbottigliatore };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const getImbottigliatoreAnalytics = (): Promise<void | ChartData[]> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;

            const imbottigliatoreChartData: ChartData[] = []

            const quantitaProdottoRicevutoPerLotto = await contract.methods.queryQuantitaProdottoRicevutaPerLotto().call({
                from: currentAddress,
                privateFor: privateFor,
            })

            const quantitaVinoImbottigliatoPerLotto = await contract.methods.queryQuantitaVinoImbottigliataPerLotto().call({
                from: currentAddress,
                privateFor: privateFor,
            })

            imbottigliatoreChartData.push({
                title: "Quantità prodotto ricevuto per lotto",
                labels: quantitaProdottoRicevutoPerLotto['1'] as string[],
                values: (quantitaProdottoRicevutoPerLotto['0'] as string[]).map((value) => parseInt(value)) as number[]
            })

            imbottigliatoreChartData.push({
                title: "Quantità vino imbottigliato per lotto",
                labels: quantitaVinoImbottigliatoPerLotto['1'] as string[],
                values: (quantitaVinoImbottigliatoPerLotto['0'] as string[]).map((value) => parseInt(value)) as number[]
            })

            return imbottigliatoreChartData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}