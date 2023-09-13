import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { ViticoltoreSchema, ViticoltoreSchemaForm } from '@/types/chainTypes';
import { ViticoltoreAbi } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(ViticoltoreAbi, contracts.vitcoltore);

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
                    const datiVendita = await contract.methods.setVendita(input.nomeProdotto, input.prezzo, input.quantitaVendita, input.nomeClienteVendita, input.dataVendita, input.addresses).send({ from: currentAddress, privateFor: privateFor })

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
        }),

    getData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    const dataRaccolta = await contract.methods.getDataRaccolta(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const datiForniture = await contract.methods.getDatiForniture(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const destinazioneUva = await contract.methods.getDestinazioneUva(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const datiVendita = await contract.methods.getDatiVendita(input).call({ from: currentAddress, privateFor: privateFor }) as string[]

                    const [nomeProdotto, prezzoVendita, quantita, nomeCliente, dataVendita] = datiVendita
                    const retrievedData: ViticoltoreSchemaForm = {
                        dataRaccolta: dataRaccolta,
                        datiForniture: datiForniture,
                        destinazioneUva: destinazioneUva,
                        nomeProdotto: nomeProdotto!,
                        prezzo: prezzoVendita!,
                        quantitaVendita: quantita!,
                        nomeClienteVendita: nomeCliente!,
                        dataVendita: dataVendita!,
                        addresses: "addresses"
                    }

                    return retrievedData
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});

export const getManualViticoltoreData = (input: number): Promise<void | ViticoltoreSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const dataRaccolta = await contract.methods.getDataRaccolta(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiForniture = await contract.methods.getDatiForniture(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const destinazioneUva = await contract.methods.getDestinazioneUva(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiVendita = await contract.methods.getDatiVendita(input).call({ from: currentAddress, privateFor: privateFor }) as string[]

            const [nomeProdotto, prezzoVendita, quantita, nomeCliente, dataVendita] = datiVendita
            const retrievedData: ViticoltoreSchemaForm = {
                dataRaccolta: dataRaccolta,
                datiForniture: datiForniture,
                destinazioneUva: destinazioneUva,
                nomeProdotto: nomeProdotto!,
                prezzo: prezzoVendita!,
                quantitaVendita: quantita!,
                nomeClienteVendita: nomeCliente!,
                dataVendita: dataVendita!,
                addresses: "addresses"
            }

            return retrievedData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}