import { type } from "os";
import { ZodBoolean, string, z } from "zod";

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
    viticoltoreAddress: z.boolean().default(false)
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
    quantitaVendita: z.number({
        required_error: "Dato obbligatorio",
        invalid_type_error: "La quantità deve essere un numero",
    }),
    nomeClienteVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    dataVendita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    distributoreAddress: z.boolean().default(false)
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

// SENSORI SCHEMA

// AGRONOMO SENSORI

export const AgronomoSensoriSchema = z.object({
    superficie: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    umidita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    temperatura: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    pioggia: z.string().min(1, {
        message: "Dato obbligatorio",
    })
})
export type AgronomoSensoriSchemaForm = z.infer<typeof AgronomoSensoriSchema>;

// VITICOLTORE SENSORI

export const ViticoltoreSensoriSchema = z.object({
    quantitaUvaRaccolta: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    tipologiaUva: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    umidita: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    temperatura: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaFertilizzanti: z.string().min(1, {
        message: "Dato obbligatorio",
    })
})
export type ViticoltoreSensoriSchemaForm = z.infer<typeof ViticoltoreSensoriSchema>;

// PRODUTTORE SENSORI

export const ProduttoreSensoriSchema = z.object({
    pesoArrivo: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    pesoProdottoFinito: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    idContainer: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    temperaturaContainer: z.string().min(1, {
        message: "Dato obbligatorio",
    })
})
export type ProduttoreSensoriSchemaForm = z.infer<typeof ProduttoreSensoriSchema>;

// IMBOTTIGLIATORE SENSORI

export const ImbottigliatoreSensoriSchema = z.object({
    quantitaProdottoRicevuta: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    quantitaVinoImbottigliata: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    gradazioneAlcolica: z.string().min(1, {
        message: "Dato obbligatorio",
    })
})
export type ImbottigliatoreSensoriSchemaForm = z.infer<typeof ImbottigliatoreSensoriSchema>;


// DISTRIBUTORE SENSORI

export const DistributoreSensoriSchema = z.object({
    quantitaTrasportata: z.string().min(1, {
        message: "Dato obbligatorio",
    }),
    temperaturaTrasporto: z.string().min(1, {
        message: "Dato obbligatorio",
    })
})
export type DistributoreSensoriSchemaForm = z.infer<typeof DistributoreSensoriSchema>;

// RIVENDITORE SENSORI

export const RivenditoreSensoriSchema = z.object({
    tipologiaQuantita: z.string().min(1, {
        message: "Dato obbligatorio",
    })
});
export type RivenditoreSensoriSchemaForm = z.infer<typeof RivenditoreSensoriSchema>;

// FILIERACHAINSENSORI

export type FilieraChainSensori = {
    completed: boolean,
    agronomo: AgronomoSensoriSchemaForm | undefined,
    viticoltore: ViticoltoreSensoriSchemaForm | undefined,
    produttore: ProduttoreSensoriSchemaForm | undefined,
    imbottigliatore: ImbottigliatoreSensoriSchemaForm | undefined,
    distributore: DistributoreSensoriSchemaForm | undefined,
    rivenditore: {
        rivenditore: RivenditoreSensoriSchemaForm | undefined,
        distributoreData: DistributoreInRivenditoreData | undefined
    } | undefined,
}

export type ChartData = {
    title: string,
    labels: string[],
    values: number[]
}

export type Charts = {
    agronomo: ChartData[],
    distributore: ChartData[],
    imbottigliatore: ChartData[],
    produttore: ChartData[],
    rivenditore: ChartData[],
    viticoltore: ChartData[],
}

export type Customer = {
    certificazioneUva: string
    dataRaccolta: string,
    datiFornitura: string,
    destinazioneUva: string,
    prodottiVinificazione: string,
    solfiti: string,
    allergeni: string,
    localitaUve: string,
    gradazioneAlcolica: string,
    temperaturaTrasporto: string,
    validazione: string,
    certificazione: string
}

// DATA TO SHOW INSIEDE OTHER ACTORS

export type AgronomoInViticoltoreData = {
    superficieTerreno: string,
    umiditaTerreno: string,
    temperaturaTerreno: string,
    pioggiaTerreno: string
}

export type ViticoltoreInProduttoreData = {
    tipologiaUva: string,
    destinazioneUva: string,
    dataRaccolta: string,
    pesoViticoltore: string,
    datiVendita: {
        nomeProdotto: string
        prezzo: string
        quantita: string
        nomeCliente: string
        dataVendita: string
    }
}

export type ProduttoreInImbottigliatoreData = {
    prodottiVinificazione: string
}

export type ViticoltoreInImbottigliatoreData = {
    destinazioneUva: string
}

export type ImbottigliatoreInDistributoreData = {
    codiceABarre: string
}

export type DistributoreInRivenditoreData = {
    prezzoVendita: string,
    nomeProdotto: string,
    quantita: string,
    nomeCliente: string,
    dataVendita: string,
}

export type AgronomoInEnteCertificatoreData = {
    analisiQualitàProdotto: string,
    certificazioneUvaAppezzamento: string,
    superficieTerreno: string,
    umiditaTerreno: string,
    temperaturaTerreno: string,
    pioggiaTerreno: string
}

export type ViticoltoreInEnteCertificatoreData = {
    dataRaccolta: string,
    datiForniture: string,
    destinazioneUva: string,
    datiVenditaNomeProdotto: string,
    datiVenditaPrezzo: string,
    datiVenditaQuantita: string,
    datiVenditaNomeCliente: string,
    datiVenditaDataVendita: string,
    datiSensoriQuantitaRaccolta: string,
    datiSensoriTipologiaUva: string,
    datiSensoriUmiditaViticoltore: string,
    datiSensoriTemperaturaViticoltore: string,
    datiSensoriQuantitaFertilizzanti: string
}

// FILIERA

export type FilieraChain = {
    completed: boolean,
    agronomo: {
        data: AgronomoSchemaForm | undefined,
        completed: boolean
    },
    viticoltore: {
        data: ViticoltoreSchemaForm | undefined,
        agronomoData: AgronomoInViticoltoreData | undefined,
        completed: boolean
    },
    produttore: {
        data: ProduttoreSchemaForm | undefined,
        viticoltoreData: ViticoltoreInProduttoreData | undefined,
        completed: boolean
    },
    imbottigliatore: {
        data: ImbottigliatoreSchemaForm | undefined,
        produttoreData: ProduttoreInImbottigliatoreData | undefined,
        viticoltoreData: ViticoltoreInImbottigliatoreData | undefined,
        completed: boolean
    },
    distributore: {
        data: DistributoreSchemaForm | undefined,
        imbottigliatoreData: ImbottigliatoreInDistributoreData | undefined,
        completed: boolean
    },
    enteCertificatore: {
        data: EnteCertificatoreSchemaForm | undefined,
        completed: boolean
    }
}