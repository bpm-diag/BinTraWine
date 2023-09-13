import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { ImbottigliatoreSchema, ImbottigliatoreSchemaForm } from '@/types/chainTypes';
import { ImbottigliatoreAbi } from '@/server/api/routers/blockChain/filiera/abis';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(ImbottigliatoreAbi, contracts.imbottigliatore);

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
        }),

    getData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;

                    const presenzaSolfiti = await contract.methods.getSolfiti(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const presenzaAllergeni = await contract.methods.getAllergeni(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const localitaUve = await contract.methods.getlocalitaUve(input).call({ from: currentAddress, privateFor: privateFor }) as string
                    const codiceABarre = await contract.methods.getCodiceBarre(input).call({ from: currentAddress, privateFor: privateFor }) as string

                    const retrievedData: ImbottigliatoreSchemaForm = {
                        presenzaSolfiti: presenzaSolfiti,
                        presenzaAllergeni: presenzaAllergeni,
                        localitaUve: localitaUve,
                        codiceAbarre: codiceABarre
                    }

                    return retrievedData
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});

export const getManualImbottigliatoreData = (input: number): Promise<void | ImbottigliatoreSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;

            const presenzaSolfiti = await contract.methods.getSolfiti(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const presenzaAllergeni = await contract.methods.getAllergeni(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const localitaUve = await contract.methods.getlocalitaUve(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const codiceABarre = await contract.methods.getCodiceBarre(input).call({ from: currentAddress, privateFor: privateFor }) as string

            const retrievedData: ImbottigliatoreSchemaForm = {
                presenzaSolfiti: presenzaSolfiti,
                presenzaAllergeni: presenzaAllergeni,
                localitaUve: localitaUve,
                codiceAbarre: codiceABarre
            }

            return retrievedData
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}