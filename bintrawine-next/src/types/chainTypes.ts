import { z } from "zod";

// AGRONOMO SCHEMA

export const AgronomoSchema = z.object({
    analisiQualitàProdotto: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    certificazioneUvaAppezzamento: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});

export type AgronomoSchemaForm = z.infer<typeof AgronomoSchema>;

// VITICOLTORE SCHEMA

export const ViticoltoreSchema = z.object({
    dataRaccolta: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    datiForniture: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    destinazioneUva: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    nomeProdotto: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    prezzo: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    nomeClienteVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    dataVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    addresses: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});
export type ViticoltoreSchemaForm = z.infer<typeof ViticoltoreSchema>;

// PRODUTTORE SCHEMA

export const ProduttoreSchema = z.object({
    prodottiVinificazione: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaVinoOttenuto: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaVinoRivendicato: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});
export type ProduttoreSchemaForm = z.infer<typeof ProduttoreSchema>;

// IMBOTTIGLIATORE SCHEMA

export const ImbottigliatoreSchema = z.object({
    presenzaSolfiti: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    presenzaAllergeni: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    localitaUve: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    codiceAbarre: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});
export type ImbottigliatoreSchemaForm = z.infer<typeof ImbottigliatoreSchema>;

// DISTRIBUTORE SCHEMA

export const DistributoreSchema = z.object({
    destinazioneDiConsegna: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    nomeProdotto: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    prezzo: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    nomeClienteVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    dataVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    addresses: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});
export type DistributoreSchemaForm = z.infer<typeof DistributoreSchema>;

// ENTE CERTIFICATORE SCHEMA

export const EnteCertificatoreSchema = z.object({
    validazione: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    certificazione: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
});
export type EnteCertificatoreSchemaForm = z.infer<typeof EnteCertificatoreSchema>;