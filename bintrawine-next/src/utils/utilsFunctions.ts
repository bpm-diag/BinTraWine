import { FilieraChain } from "@/types/chainTypes"
import { Role } from '@prisma/client';

export const checkIdLotto = (number_of_chains: number): number => {
    if (number_of_chains === 1) return number_of_chains
    return number_of_chains - 1
}

export const getNumberOfLotti = (chainNumber: number): number => {
    if (chainNumber === 1) return 1
    return chainNumber - 1
}

export const getCompleted = (chainNumber: number, currentNumber: number, latestCompleted: boolean): boolean => {
    if (chainNumber === 1) return false
    if (currentNumber === (chainNumber - 1)) {
        if (latestCompleted) {
            return true
        } else {
            return false
        }
    }
    return true
}

export const transformRole = (role: string): Role => {
    switch (role) {
        case "agronomo":
            return Role.AGRONOMO;
        case "viticoltore":
            return Role.VITICOLTORE;
        case "produttore":
            return Role.PRODUTTORE;
        case "imbottigliatore":
            return Role.IMBOTTIGLIATORE;
        case "distributore":
            return Role.DISTRIBUITORE;
        case "rivenditore":
            return Role.RIVENDITORE;
        case "ente_certificatore":
            return Role.ENTECERTIFICATORE;
        default:
            return Role.AGRONOMO;
    }
}

export const getLottiRange = (numberOfLotti: number, pageNumber: number, lottiPerPage: number): number[] => {
    let lotti: number[] = []
    for (let i = (lottiPerPage * (pageNumber - 1)); i < lottiPerPage * pageNumber; i++) {
        if (i === numberOfLotti) {
            return lotti
        }
        lotti.push(i)
    }
    return lotti
}

export const getCompletedByString = (id: string, filieraChain: FilieraChain): boolean => {
    switch (id) {
        case "agronomo": return filieraChain.agronomo.completed
        case "viticoltore": return filieraChain.viticoltore.completed
        case "produttore": return filieraChain.produttore.completed
        case "imbottigliatore": return filieraChain.imbottigliatore.completed
        case "distributore": return filieraChain.distributore.completed
        case "rivenditore": return false
        case "enteCertificatore": return filieraChain.enteCertificatore.completed
        default: return false
    }
}

export const userPercentage = (filieraChain: FilieraChain, roles: Role[]): number => {
    let totalCompleted = 0
    if (roles.includes(Role.RIVENDITORE)) totalCompleted += 1
    if (filieraChain.agronomo.completed && roles.includes(Role.AGRONOMO)) totalCompleted += 1
    if (filieraChain.viticoltore.completed && roles.includes(Role.VITICOLTORE)) totalCompleted += 1
    if (filieraChain.produttore.completed && roles.includes(Role.PRODUTTORE)) totalCompleted += 1
    if (filieraChain.imbottigliatore.completed && roles.includes(Role.IMBOTTIGLIATORE)) totalCompleted += 1
    if (filieraChain.distributore.completed && roles.includes(Role.DISTRIBUITORE)) totalCompleted += 1
    if (filieraChain.enteCertificatore.completed && roles.includes(Role.ENTECERTIFICATORE)) totalCompleted += 1
    return Math.round(totalCompleted / roles.length * 100)
}

export const totalPercentage = (filieraChain: FilieraChain): number => {
    let totalCompleted = 1
    if (filieraChain.agronomo.completed) totalCompleted += 1
    if (filieraChain.viticoltore.completed) totalCompleted += 1
    if (filieraChain.distributore.completed) totalCompleted += 1
    if (filieraChain.imbottigliatore.completed) totalCompleted += 1
    if (filieraChain.produttore.completed) totalCompleted += 1
    if (filieraChain.enteCertificatore.completed) totalCompleted += 1

    return Math.round(totalCompleted / 7 * 100)
}

export const getDataToShow = (id: string, filieraChain: FilieraChain): { label: string, value: string }[] => {

    switch (id) {
        case "agronomo": return [
            { label: "Analisi Qualita Prodotto", value: filieraChain.agronomo.data?.analisiQualitàProdotto ?? "" },
            { label: "Certificazione Appezzamento Uva", value: filieraChain.agronomo.data?.certificazioneUvaAppezzamento ?? "" }
        ]
        case "viticoltore": return [
            { label: "Data Raccolta", value: filieraChain.viticoltore.data?.dataRaccolta ?? "" },
            { label: "Data Vendita", value: filieraChain.viticoltore.data?.dataVendita ?? "" },
            { label: "Dati Forniture", value: filieraChain.viticoltore.data?.datiForniture ?? "" },
            { label: "Destinazione Uva", value: filieraChain.viticoltore.data?.destinazioneUva ?? "" },
            { label: "Nome Clienta Vendita", value: filieraChain.viticoltore.data?.nomeClienteVendita ?? "" },
            { label: "Nome Prodotto", value: filieraChain.viticoltore.data?.nomeProdotto ?? "" },
            { label: "Prezzo", value: filieraChain.viticoltore.data?.prezzo ?? "" },
            { label: "Quantità Vendita", value: filieraChain.viticoltore.data?.quantitaVendita ?? "" }
        ]
        case "produttore": return [
            { label: "Prodotti Vinificazione", value: filieraChain.produttore.data?.prodottiVinificazione ?? "" },
            { label: "Quantita Vino Ottenuto", value: filieraChain.produttore.data?.quantitaVinoOttenuto ?? "" },
            { label: "Quantita Vino Rivendicato", value: filieraChain.produttore.data?.quantitaVinoRivendicato ?? "" }
        ]
        case "imbottigliatore": return [
            { label: "Presenza Solfiti", value: filieraChain.imbottigliatore.data?.presenzaSolfiti ?? "" },
            { label: "Presenza Allergenti", value: filieraChain.imbottigliatore.data?.presenzaAllergeni ?? "" },
            { label: "Località Uve", value: filieraChain.imbottigliatore.data?.localitaUve ?? "" },
            { label: "Codice a Barre", value: filieraChain.imbottigliatore.data?.codiceAbarre ?? "" }
        ]
        case "distributore": return [
            { label: "Data Vendita", value: filieraChain.distributore.data?.dataVendita ?? "" },
            { label: "Destinazione di Consegna", value: filieraChain.distributore.data?.destinazioneDiConsegna ?? "" },
            { label: "Nome Cliente Vendita", value: filieraChain.distributore.data?.nomeClienteVendita ?? "" },
            { label: "Nome Prodotto", value: filieraChain.distributore.data?.nomeProdotto ?? "" },
            { label: "Prezzo", value: filieraChain.distributore.data?.prezzo ?? "" },
            { label: "Quantita Vendita", value: String(filieraChain.distributore.data?.quantitaVendita) ?? "" }
        ]
        case "enteCertificatore": return [
            { label: "Validazione", value: filieraChain.enteCertificatore.data?.validazione ?? "" },
            { label: "Certificazione", value: filieraChain.enteCertificatore.data?.certificazione ?? "" },
        ]
        default: return []
    }
}

export const getRandomNumber = (maxNumber: number): number => {
    return Math.floor(Math.random() * maxNumber + 1);
}