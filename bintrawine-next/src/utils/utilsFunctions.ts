import { FilieraChain } from "@/types/chainTypes"

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
            { label: "Quantita Vendita", value: filieraChain.distributore.data?.quantitaVendita ?? "" }
        ]
        case "enteCertificatore": return [
            { label: "Validazione", value: filieraChain.enteCertificatore.data?.validazione ?? "" },
            { label: "Certificazione", value: filieraChain.enteCertificatore.data?.certificazione ?? "" },
        ]
        default: return []
    }
}