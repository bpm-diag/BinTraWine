import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import {
    AgronomoSchemaForm,
    ViticoltoreSchemaForm,
    ProduttoreSchemaForm,
    ImbottigliatoreSchemaForm,
    DistributoreSchemaForm,
    EnteCertificatoreSchemaForm,
    FilieraChain,
    FilieraChainSensori,
    ViticoltoreInProduttoreData,
    Charts,
    Customer
} from '@/types/chainTypes';
import { getManualAgronomoData, getAgronomoIDLotto, getSensoriAgronomo, setSensoriAgronomo, getAgronomoAnalytics } from '@/server/api/routers/blockChain/filiera/agronomo'
import { getManualViticoltoreData, getViticoltoreIDLotto, getSensoriViticoltore, setSensoriViticoltore, getViticoltoreAnalytics } from '@/server/api/routers/blockChain/filiera/viticoltore'
import { getManualProduttoreData, getProduttoreIDLotto, getSensoriProduttore, setSensoriProduttore, getProduttoreAnalytics } from '@/server/api/routers/blockChain/filiera/produttore'
import { getManualImbottigliatoreData, getImbottigliatoreIDLotto, getSensoriImbottigliatore, setSensoriImbottigliatore, getImbottigliatoreAnalytics } from '@/server/api/routers/blockChain/filiera/imbottigliatore'
import { getManualDistributoreData, getDistributoreIDLotto, getSensoriDistributore, setSensoriDistributore, getDistributoreAnalytics } from '@/server/api/routers/blockChain/filiera/distributore'
import { getManualEnteCertificatoreData, getEnteCertificatoreIDLotto } from '@/server/api/routers/blockChain/filiera/enteCertificatore'
import { getSensoriRivenditore, setSensoriRivenditore, getRivenditoreAnalytics } from '@/server/api/routers/blockChain/filiera/rivenditore'
import { getCustomerData } from '@/server/api/routers/blockChain/filiera/customer';

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

const checkProduttoreData = (produttoreData: (void | { produttore: ProduttoreSchemaForm, viticoltoreData: ViticoltoreInProduttoreData | undefined })): [ProduttoreSchemaForm | undefined, ViticoltoreInProduttoreData | undefined, boolean] => {
    if (!produttoreData) return [undefined, undefined, false]
    const { prodottiVinificazione, quantitaVinoOttenuto, quantitaVinoRivendicato } = produttoreData.produttore
    if (prodottiVinificazione && quantitaVinoOttenuto && quantitaVinoRivendicato) return [produttoreData.produttore, produttoreData.viticoltoreData, true]
    return [undefined, produttoreData.viticoltoreData, false]
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

const checkCustomerData = (customerData: (void | Customer)): boolean => {
    if (!customerData) return false
    const { allergeni, certificazione, certificazioneUva, dataRaccolta, datiFornitura, destinazioneUva, gradazioneAlcolica, localitaUve, prodottiVinificazione, solfiti, temperaturaTrasporto, validazione } = customerData
    if (allergeni && certificazione && certificazioneUva && dataRaccolta && datiFornitura && destinazioneUva && gradazioneAlcolica && localitaUve && prodottiVinificazione && solfiti && temperaturaTrasporto && validazione) return true
    return false
}

const checkSensoriData = (filieraChainSensori: FilieraChainSensori): FilieraChainSensori => {
    if (
        filieraChainSensori.agronomo?.temperatura &&
        filieraChainSensori.viticoltore?.quantitaFertilizzanti &&
        filieraChainSensori.produttore?.pesoArrivo &&
        filieraChainSensori.imbottigliatore?.gradazioneAlcolica &&
        filieraChainSensori.distributore?.quantitaTrasportata &&
        filieraChainSensori.rivenditore?.rivenditore?.tipologiaQuantita
    ) {
        filieraChainSensori.completed = true
        return filieraChainSensori
    }
    return filieraChainSensori
}

export const blockChainRouter = createTRPCRouter({
    getManualData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            // get and check data
            const [agronomoManualData, agronomoCompleted] = checkAgronomoData(await getManualAgronomoData(input))
            const [viticoltoreManualData, viticoltoreCompleted] = checkViticoltoreData(await getManualViticoltoreData(input))
            const [produttoreManualData, viticoltoreDataInProduttore, produttoreCompleted] = checkProduttoreData(await getManualProduttoreData(input))
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
                    viticoltoreData: viticoltoreDataInProduttore,
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

            return filieraData
        }),

    setSensoriData: publicProcedure
        .input(z.object({
            lottoId: z.number(),
            creatorId: z.number()
        }))
        .mutation(async ({ input, ctx }) => {
            await setSensoriAgronomo(input.lottoId)
            await setSensoriViticoltore(input.lottoId)
            await setSensoriProduttore(input.lottoId)
            await setSensoriImbottigliatore(input.lottoId)
            await setSensoriDistributore(input.lottoId)
            await setSensoriRivenditore(input.lottoId)

            const lotto = await ctx.prisma.lotto.findUnique({
                where: {
                    id: input.lottoId
                }
            })

            if (lotto == null) {
                console.log("CREATE LOTTO")
                await ctx.prisma.lotto.create({
                    data: {
                        id: input.lottoId,
                        creatorId: input.creatorId
                    }
                })
            }
        }),

    getSensoriData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            const sensoriRivenditore = await getSensoriRivenditore(input)

            const filieraChainSensori: FilieraChainSensori = {
                completed: false,
                agronomo: await getSensoriAgronomo(input),
                viticoltore: await getSensoriViticoltore(input),
                produttore: await getSensoriProduttore(input),
                imbottigliatore: await getSensoriImbottigliatore(input),
                distributore: await getSensoriDistributore(input),
                rivenditore: sensoriRivenditore
            }

            return checkSensoriData(filieraChainSensori)

        }),

    getLatestIDLotto: publicProcedure
        .query(async ({ ctx }) => {

            const agronomoIDLotto = await getAgronomoIDLotto()
            const viticoltoreIDLotto = await getViticoltoreIDLotto()
            const distributoreIDLotto = await getDistributoreIDLotto()
            const imbottigliatoreIDLotto = await getImbottigliatoreIDLotto()
            const produttoreIDLotto = await getProduttoreIDLotto()
            const enteCertificatoreIDLotto = await getEnteCertificatoreIDLotto()
            console.log("GET LATEST ID LOTTO")

            if (agronomoIDLotto && viticoltoreIDLotto && distributoreIDLotto && imbottigliatoreIDLotto && produttoreIDLotto && enteCertificatoreIDLotto) {
                return Math.max(agronomoIDLotto, viticoltoreIDLotto, distributoreIDLotto, imbottigliatoreIDLotto, produttoreIDLotto, enteCertificatoreIDLotto)
            }

            return 1
        }),

    getAnalytics: publicProcedure
        .query(async ({ ctx }) => {

            const chartData: Charts = {
                agronomo: await getAgronomoAnalytics(),
                distributore: await getDistributoreAnalytics(),
                imbottigliatore: await getImbottigliatoreAnalytics(),
                produttore: await getProduttoreAnalytics(),
                rivenditore: await getRivenditoreAnalytics(),
                viticoltore: await getViticoltoreAnalytics()
            }

            return chartData
        }),

    getCustomerData: publicProcedure
        .input(z.number())
        .query(async ({ input }) => {
            const customerData = await getCustomerData(input);
            return {
                exist: checkCustomerData(customerData),
                data: customerData
            }
        })
})