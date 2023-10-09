
import Web3 from 'web3';
import { customerAbi } from '@/server/api/routers/blockChain/filiera/abis';
import { Customer } from '@/types/chainTypes';
import { contracts } from '@/server/api/routers/blockChain/filiera/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.NODE_IP}:22006`));
const contract = new web3.eth.Contract(customerAbi, contracts.customer);

const privateFor: string[] = ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=", "R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=",
    "UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=", "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="];

export const getCustomerData = (input: number): Promise<void | Customer> => {
    return web3.eth.getAccounts()
        .then(async (accounts) => {
            const [currentAddress, ...other] = accounts;
            // agronomo
            const certificazioneUva = await contract.methods.getCertificazioneAppezzamentoUva(input).call({ from: currentAddress, privateFor: privateFor }) as string
            // viticoltore
            const dataRaccolta = await contract.methods.getDataRaccolta(input).call({ from: currentAddress, privateFor: privateFor, }) as string
            const datiFornitura = await contract.methods.getDatiForniture(input).call({ from: currentAddress, privateFor: privateFor, }) as string
            const destinazioneUva = await contract.methods.getDestinazioneUva(input).call({ from: currentAddress, privateFor: privateFor, }) as string
            // produttore
            const prodottiVinificazione = await contract.methods.getProdottiVinificazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
            // imbottigliatore
            const solfiti = await contract.methods.getSolfiti(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const allergeni = await contract.methods.getAllergeni(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const localitaUve = await contract.methods.getLocalitaUve(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const gradazioneAlcolica = await contract.methods.getGradazioneAlcolica(input).call({ from: currentAddress, privateFor: privateFor }) as string
            // distributore
            const temperaturaTrasporto = await contract.methods.getTemperaturaTrasporto(input).call({ from: currentAddress, privateFor: privateFor }) as string
            // ente certificatore
            const validazione = await contract.methods.getValidazione(input).call({ from: currentAddress, privateFor: privateFor }) as string
            const certificazione = await contract.methods.getCertificazione(input).call({ from: currentAddress, privateFor: privateFor }) as string

            return {
                certificazioneUva: certificazioneUva,
                dataRaccolta: dataRaccolta,
                datiFornitura: datiFornitura,
                destinazioneUva: destinazioneUva,
                prodottiVinificazione: prodottiVinificazione,
                solfiti: solfiti,
                allergeni: allergeni,
                localitaUve: localitaUve,
                gradazioneAlcolica: gradazioneAlcolica,
                temperaturaTrasporto: temperaturaTrasporto,
                validazione: validazione,
                certificazione: certificazione,
            }
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}