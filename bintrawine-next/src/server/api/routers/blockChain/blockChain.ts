import { api } from "@/utils/api";
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import {
    AgronomoSchemaForm,
    ViticoltoreSchemaForm,
    ProduttoreSchemaForm,
    ImbottigliatoreSchemaForm,
    DistributoreSchemaForm,
    EnteCertificatoreSchemaForm
} from '@/types/chainTypes';
import { getManualAgronomoData } from '@/server/api/routers/blockChain/filiera/agronomo'
import { getManualViticoltoreData } from '@/server/api/routers/blockChain/filiera/viticoltore'
import { getManualProduttoreData } from '@/server/api/routers/blockChain/filiera/produttore'
import { getManualImbottigliatoreData } from '@/server/api/routers/blockChain/filiera/imbottigliatore'
import { getManualDistributoreData } from '@/server/api/routers/blockChain/filiera/distributore'
import { getManualEnteCertificatoreData } from '@/server/api/routers/blockChain/filiera/enteCertificatore'

export type FilieraChain = {
    completed: boolean,
    agronomo: {
        data: AgronomoSchemaForm | undefined,
        completed: boolean
    },
    viticoltore: {
        data: ViticoltoreSchemaForm | undefined,
        completed: boolean
    },
    produttore: {
        data: ProduttoreSchemaForm | undefined,
        completed: boolean
    },
    imbottigliatore: {
        data: ImbottigliatoreSchemaForm | undefined,
        completed: boolean
    },
    distributore: {
        data: DistributoreSchemaForm | undefined,
        completed: boolean
    },
    enteCertificatore: {
        data: EnteCertificatoreSchemaForm | undefined,
        completed: boolean
    }
}

const checkAgronomoData = (agronomoData: (void | AgronomoSchemaForm)): [AgronomoSchemaForm | undefined, boolean] => {
    if (!agronomoData) return [undefined, false]
    const { analisiQualitàProdotto, certificazioneUvaAppezzamento } = agronomoData
    if (analisiQualitàProdotto && certificazioneUvaAppezzamento) return [agronomoData, true]
    return [undefined, false]
}

const checkViticoltoreData = (viticoltoreData: (void | ViticoltoreSchemaForm)): [ViticoltoreSchemaForm | undefined, boolean] => {
    if (!viticoltoreData) return [undefined, false]
    const { dataRaccolta, datiForniture, destinazioneUva, nomeProdotto, prezzo, quantitaVendita, nomeClienteVendita, dataVendita } = viticoltoreData
    if (dataRaccolta && datiForniture && destinazioneUva && nomeProdotto && prezzo && quantitaVendita && nomeClienteVendita && dataVendita) return [viticoltoreData, true]
    return [undefined, false]
}

const checkProduttoreData = (produttoreData: (void | ProduttoreSchemaForm)): [ProduttoreSchemaForm | undefined, boolean] => {
    if (!produttoreData) return [undefined, false]
    const { prodottiVinificazione, quantitaVinoOttenuto, quantitaVinoRivendicato } = produttoreData
    if (prodottiVinificazione && quantitaVinoOttenuto && quantitaVinoRivendicato) return [produttoreData, true]
    return [undefined, false]
}

const checkImbottigliatoreData = (imbottigliatoreData: (void | ImbottigliatoreSchemaForm)): [ImbottigliatoreSchemaForm | undefined, boolean] => {
    if (!imbottigliatoreData) return [undefined, false]
    const { presenzaSolfiti, presenzaAllergeni, localitaUve, codiceAbarre } = imbottigliatoreData
    if (presenzaSolfiti && presenzaAllergeni && localitaUve && codiceAbarre) return [imbottigliatoreData, true]
    return [undefined, false]
}

const checkDistributoreData = (distributoreData: (void | DistributoreSchemaForm)): [DistributoreSchemaForm | undefined, boolean] => {
    if (!distributoreData) return [undefined, false]
    const { nomeProdotto, prezzo, quantitaVendita, nomeClienteVendita, dataVendita, destinazioneDiConsegna } = distributoreData
    if (nomeProdotto && prezzo && quantitaVendita && nomeClienteVendita && dataVendita && destinazioneDiConsegna) return [distributoreData, true]
    return [undefined, false]
}

const checkEnteCertificatoreData = (enteCertificatoreData: (void | EnteCertificatoreSchemaForm)): [EnteCertificatoreSchemaForm | undefined, boolean] => {
    if (!enteCertificatoreData) return [undefined, false]
    const { validazione, certificazione } = enteCertificatoreData
    if (validazione && certificazione) return [enteCertificatoreData, true]
    return [undefined, false]
}

export const blockChainRouter = createTRPCRouter({
    getManualData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            console.log("INPUT", input)

            // get and check data
            const [agronomoManualData, agronomoCompleted] = checkAgronomoData(await getManualAgronomoData(input))
            const [viticoltoreManualData, viticoltoreCompleted] = checkViticoltoreData(await getManualViticoltoreData(input))
            const [produttoreManualData, produttoreCompleted] = checkProduttoreData(await getManualProduttoreData(input))
            const [imbottigliatoreManualData, imbottigliatoreCompleted] = checkImbottigliatoreData(await getManualImbottigliatoreData(input))
            const [distributoreManualData, distributoreCompleted] = checkDistributoreData(await getManualDistributoreData(input))
            const [enteCertificatoreManualData, enteCertificatoreCompleted] = checkEnteCertificatoreData(await getManualEnteCertificatoreData(input))
            const allCompleted = agronomoCompleted && viticoltoreCompleted && produttoreCompleted && imbottigliatoreCompleted && distributoreCompleted && enteCertificatoreCompleted

            const filieraData: FilieraChain = {
                completed: allCompleted,
                agronomo: {
                    data: agronomoManualData,
                    completed: agronomoCompleted
                },
                viticoltore: {
                    data: viticoltoreManualData,
                    completed: viticoltoreCompleted
                },
                produttore: {
                    data: produttoreManualData,
                    completed: produttoreCompleted
                },
                imbottigliatore: {
                    data: imbottigliatoreManualData,
                    completed: imbottigliatoreCompleted
                },
                distributore: {
                    data: distributoreManualData,
                    completed: distributoreCompleted
                },
                enteCertificatore: {
                    data: enteCertificatoreManualData,
                    completed: enteCertificatoreCompleted
                },
            }

            console.log(filieraData)
            return filieraData
        })
})