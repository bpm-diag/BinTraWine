import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { DistributoreSchema, DistributoreSchemaForm } from '@/types/chainTypes';
import { DistributoreAbi } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(DistributoreAbi, contracts.distributore);

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
                    const datiVendita = await contract.methods.setDatiVendita(input.prezzo, input.nomeProdotto, input.quantitaVendita, input.nomeClienteVendita, input.dataVendita, [currentAddress]).send({ from: currentAddress, privateFor: privateFor })
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

export const getManualDistributoreData = (input: number): Promise<void | DistributoreSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const destinazione = await contract.methods.getDestinazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const datiVendita = await contract.methods.getDatiVendita(input).call({ from: currentAddress, privateFor: privateFor })
            const prezzoVendita = datiVendita['0'] as string
            const nomeProdotto = datiVendita['1'] as string
            const quantita = datiVendita['2'] as string
            const nomeCliente = datiVendita['3'] as string
            const dataVendita = datiVendita['4'] as string

            const retrievedData: DistributoreSchemaForm = {
                destinazioneDiConsegna: destinazione,
                nomeProdotto: nomeProdotto,
                prezzo: prezzoVendita,
                quantitaVendita: quantita,
                nomeClienteVendita: nomeCliente,
                dataVendita: dataVendita
            }

            console.log("RETURN", retrievedData)
            return retrievedData
        })
        .catch((error) => {
            console.error("ERROR GET DISTRIB", error);
        })
}