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

            const viticoltoreData = await getManualViticoltoreData(input)
            const produttoreData = await getManualProduttoreData(input)
            const imbottigliatoreData = await getManualImbottigliatoreData(input)
            const distributoreData = await getManualDistributoreData(input)
            const enteCertificatoreData = await getManualEnteCertificatoreData(input)

            // get and check data
            const [agronomoManualData, agronomoCompleted] = checkAgronomoData(await getManualAgronomoData(input))
            const [viticoltoreManualData, viticoltoreCompleted] = checkViticoltoreData(viticoltoreData?.viticoltore)
            const [produttoreManualData, produttoreCompleted] = checkProduttoreData(produttoreData?.produttore)
            const [imbottigliatoreManualData, imbottigliatoreCompleted] = checkImbottigliatoreData(imbottigliatoreData?.imbottigliatore)
            const [distributoreManualData, distributoreCompleted] = checkDistributoreData(distributoreData?.distributore)
            const [enteCertificatoreManualData, enteCertificatoreCompleted] = checkEnteCertificatoreData(enteCertificatoreData)
            const allCompleted = agronomoCompleted && viticoltoreCompleted && produttoreCompleted && imbottigliatoreCompleted && distributoreCompleted && enteCertificatoreCompleted
            const filieraData: FilieraChain = {
                completed: allCompleted,
                agronomo: {
                    data: agronomoManualData,
                    completed: agronomoCompleted
                },
                viticoltore: {
                    data: viticoltoreManualData,
                    agronomoData: viticoltoreData?.agronomoData,
                    completed: viticoltoreCompleted
                },
                produttore: {
                    data: produttoreManualData,
                    viticoltoreData: produttoreData?.viticoltoreData,
                    completed: produttoreCompleted
                },
                imbottigliatore: {
                    data: imbottigliatoreManualData,
                    produttoreData: imbottigliatoreData?.produttoreData,
                    viticoltoreData: imbottigliatoreData?.viticoltoreData,
                    completed: imbottigliatoreCompleted
                },
                distributore: {
                    data: distributoreManualData,
                    imbottigliatoreData: distributoreData?.imbottigliatoreData,
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

            if (lotto == null) await ctx.prisma.lotto.create({
                data: {
                    id: input.lottoId,
                    creatorId: input.creatorId
                }
            })
        }),

    getSensoriData: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            const sensoriAgronomo = await getSensoriAgronomo(input)
            const sensoriViticoltore = await getSensoriViticoltore(input)
            const sensoriProduttore = await getSensoriProduttore(input)
            const sensoriImbottigliatore = await getSensoriImbottigliatore(input)
            const sensoriDistributore = await getSensoriDistributore(input)
            const sensoriRivenditore = await getSensoriRivenditore(input)

            const filieraChainSensori: FilieraChainSensori = {
                completed: false,
                agronomo: sensoriAgronomo ?? undefined,
                viticoltore: sensoriViticoltore ?? undefined,
                produttore: sensoriProduttore ?? undefined,
                imbottigliatore: sensoriImbottigliatore ?? undefined,
                distributore: sensoriDistributore ?? undefined,
                rivenditore: sensoriRivenditore ?? undefined
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

            if (agronomoIDLotto && viticoltoreIDLotto && distributoreIDLotto && imbottigliatoreIDLotto && produttoreIDLotto && enteCertificatoreIDLotto) {
                return Math.max(agronomoIDLotto, viticoltoreIDLotto, distributoreIDLotto, imbottigliatoreIDLotto, produttoreIDLotto, enteCertificatoreIDLotto)
            }

            return 1
        }),

    getAnalytics: publicProcedure
        .query(async ({ ctx }) => {
            const agronomoAnalytics = await getAgronomoAnalytics();
            const distributoreAnalytics = await getDistributoreAnalytics()
            const imbottigliatoreAnalytics = await getImbottigliatoreAnalytics()
            const produttoreAnalytics = await getProduttoreAnalytics()
            const rivenditoreAnalytics = await getRivenditoreAnalytics()
            const viticoltoreAnalytics = await getViticoltoreAnalytics()

            const chartData: Charts = {
                agronomo: agronomoAnalytics!,
                distributore: distributoreAnalytics!,
                imbottigliatore: imbottigliatoreAnalytics!,
                produttore: produttoreAnalytics!,
                rivenditore: rivenditoreAnalytics!,
                viticoltore: viticoltoreAnalytics!
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