import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { ProduttoreSchema } from '@/types/chainTypes';
import { ProduttoreAbi } from '@/server/api/routers/abis';
import { contracts } from '@/server/api/routers/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(ProduttoreAbi, contracts.produttore);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const produttoreRouter = createTRPCRouter({
    send: publicProcedure
        .input(ProduttoreSchema)
        .mutation(async ({ input, ctx }) => {
            return await web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    // send produttore data
                    const prodottiVinificazione = await contract.methods.setProdottiVinificazione(input.prodottiVinificazione).send({ from: currentAddress, privateFor: privateFor })
                    const quantitaVino = await contract.methods.setQuantitaVinoOttenuto(input.quantitaVinoOttenuto).send({ from: currentAddress, privateFor: privateFor })
                    const quantitaVinoRivendicato = await contract.methods.setQuantitaVinoRivendicato(input.quantitaVinoRivendicato).send({ from: currentAddress, privateFor: privateFor })

                    return {
                        prodottiVinificazione: prodottiVinificazione,
                        quantitaVino: quantitaVino,
                        quantitaVinoRivendicato: quantitaVinoRivendicato
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
                    const prodottiVinificazione = await contract.methods.getProdottiVinificazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const quantitaVinoOttenuto = await contract.methods.getQuantitaVinoOttenuto(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const quantitaVinoRivendicato = await contract.methods.getQuantitaVinoRivendicato(input).call({ from: currentAddress, privateFor: privateFor }) as string

                    return {
                        prodottiVinificazione: prodottiVinificazione,
                        quantitaVino: quantitaVinoOttenuto,
                        quantitaVinoRivendicato: quantitaVinoRivendicato
                    }
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});