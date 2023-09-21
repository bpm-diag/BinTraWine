import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';
import Web3 from 'web3';
import { RivenditoreAbi, SimulatoreSensori } from '@/server/api/routers/blockChain/filiera/abis';
import { RivenditoreSensoriSchemaForm } from '@/types/chainTypes';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';
import { getRandomNumber } from '@/utils/utilsFunctions';

const web3 = new Web3(new Web3.providers.HttpProvider("http://149.132.178.150:22006"));

const contract = new web3.eth.Contract(RivenditoreAbi, contracts.rivenditore);
const sensoriContract = new web3.eth.Contract(SimulatoreSensori, contracts.simulatoreSensori);

const privateFor = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const rivenditoreRouter = createTRPCRouter({
    getSensoriData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return web3.eth.getAccounts()
                .then(async (accounts) => {
                    const [currentAddress, ...other] = accounts;
                    const sensoriRivenditore = await contract.methods.getDatiSensoriRivenditore(input).call({
                        from: currentAddress,
                        privateFor: privateFor,
                    })

                    return {
                        sensoriRivenditore: sensoriRivenditore,
                    }
                })
                .catch((error) => {
                    console.error("ERROR", error);
                })
        })
});

export const getSensoriRivenditore = (input: number): Promise<void | RivenditoreSensoriSchemaForm> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            const data = await contract.methods.getDatiSensoriRivenditore(input).call({ from: currentAddress, privateFor: privateFor })

            return {
                tipologiaQuantita: "tipologia 1",
            };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

export const setSensoriRivenditore = (input: number) => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            // send agronomo data
            const sensoriDistributore = await sensoriContract.methods.setSensoriRivenditore(input, "Montepulciano d'Abruzzo, 200").send({ from: currentAddress, privateFor: privateFor })
            return { sensoriDistributore };
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}