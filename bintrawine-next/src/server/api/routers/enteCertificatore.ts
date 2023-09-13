import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { EnteCertificatoreSchema } from '@/types/chainTypes';
import { EnteCertificatoreAbi } from '@/server/api/routers/abis';
import { contracts } from '@/server/api/routers/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(EnteCertificatoreAbi, contracts.enteCertificatore);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const enteCertificatoreRouter = createTRPCRouter({
    send: publicProcedure
        .input(EnteCertificatoreSchema)
        .mutation(async ({ input, ctx }) => {
            return await web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    // send produttore data
                    const validazione = await contract.methods.setValidazione(input.validazione).send({ from: currentAddress, privateFor: privateFor })
                    const certificazione = await contract.methods.setCertificazione(input.certificazione).send({ from: currentAddress, privateFor: privateFor })

                    return {
                        validazione: validazione,
                        certificazione: certificazione
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

                    const validazione = await contract.methods.getValidazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const certificazione = await contract.methods.getCertificazione(input).call({ from: currentAddress, privateFor: privateFor }) as string

                    return {
                        validazione: validazione,
                        certificazione: certificazione,
                    }
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});