import Actor, { ActorData } from "@/components/actor";
import { MdAgriculture } from "react-icons/md";
import React from 'react';
import { api } from "@/utils/api";
import Loader from "@/components/loading";


export interface ProductionChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: string
}

const ProductionChain = React.forwardRef<HTMLDivElement, ProductionChainProps>(
    ({ className, idLotto }, ref) => {

        const getLotto = api.blockChainRouter.getManualData.useQuery(Number(idLotto))

        if (getLotto.isLoading) {
            return (
                <div className="bg-surface_dark flex justify-center items-center">
                    <Loader />
                </div>
            )
        }

        if (getLotto.isError) {
            return (
                <div className="bg-surface_dark flex justify-center items-center">
                    <p>Errore nel caricamento, provare a ricaricare</p>
                </div>
            )
        }

        const data: ActorData[] = [
            {
                name: "Agronomo",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Dati Sensori Agronomo",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Superficie",
                                value: "2000mq"
                            },
                            {
                                name: "Umidità",
                                value: "43%"
                            },
                            {
                                name: "Temperatura",
                                value: "22°"
                            },
                            {
                                name: "Pioggia",
                                value: "3mm"
                            },
                        ]
                    },
                    {
                        title: "Analisi Qualità Prodotto",
                        contentType: "textual",
                        data: getLotto.data.agronomo.data?.analisiQualitàProdotto ?? "Dato non trovato"
                    },
                    {
                        title: "Certificazione Uva Appezzamento",
                        contentType: "textual",
                        data: getLotto.data.agronomo.data?.certificazioneUvaAppezzamento ?? "Dato non trovato"
                    }
                ]
            },
            {
                name: "Viticoltore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Data Raccolta",
                        contentType: "value",
                        data: getLotto.data.viticoltore.data?.dataRaccolta ?? "Dato non trovato"
                    },
                    {
                        title: "Dati Forniture",
                        contentType: "value",
                        data: getLotto.data.viticoltore.data?.datiForniture ?? "Dato non trovato"
                    },
                    {
                        title: "Destinazione Uva",
                        contentType: "value",
                        data: getLotto.data.viticoltore.data?.destinazioneUva ?? "Dato non trovato"
                    },
                    {
                        title: "Dati vendita",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Nome",
                                value: getLotto.data.viticoltore.data?.nomeProdotto ?? "Dato non trovato"
                            },
                            {
                                name: "Prezzo",
                                value: getLotto.data.viticoltore.data?.prezzo ?? "Dato non trovato"
                            },
                            {
                                name: "Quantità Vendita",
                                value: getLotto.data.viticoltore.data?.quantitaVendita ?? "Dato non trovato"
                            },
                            {
                                name: "Nome Cliente Vendita",
                                value: getLotto.data.viticoltore.data?.nomeClienteVendita ?? "Dato non trovato"
                            },
                            {
                                name: "Data Vendita",
                                value: getLotto.data.viticoltore.data?.dataVendita ?? "Dato non trovato"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Produttore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Prodotti Vinificazione",
                        contentType: "value",
                        data: getLotto.data.produttore.data?.prodottiVinificazione ?? "Dato non trovato"
                    },
                    {
                        title: "Vino Ottenuto",
                        contentType: "value",
                        data: getLotto.data.produttore.data?.quantitaVinoOttenuto ?? "Dato non trovato"
                    },
                    {
                        title: "Vino Rivendicato",
                        contentType: "value",
                        data: getLotto.data.produttore.data?.quantitaVinoRivendicato ?? "Dato non trovato"
                    },
                    {
                        title: "Dati Sensori Produttore",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Superficie",
                                value: "2000mq"
                            },
                            {
                                name: "Umidità",
                                value: "43%"
                            },
                            {
                                name: "Temperatura",
                                value: "22°"
                            },
                            {
                                name: "Pioggia",
                                value: "3mm"
                            },
                        ]
                    }
                ]
            },
            {
                name: "Imbottigliatore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Presenza Solfiti",
                        contentType: "value",
                        data: getLotto.data.imbottigliatore.data?.presenzaSolfiti ?? "Dato non trovato"
                    },
                    {
                        title: "Presenza Allergeni",
                        contentType: "value",
                        data: getLotto.data.imbottigliatore.data?.presenzaAllergeni ?? "Dato non trovato"
                    },
                    {
                        title: "Località Uve",
                        contentType: "value",
                        data: getLotto.data.imbottigliatore.data?.localitaUve ?? "Dato non trovato"
                    },
                    {
                        title: "Codice a barre",
                        contentType: "value",
                        data: getLotto.data.imbottigliatore.data?.codiceAbarre ?? "Dato non trovato"
                    },
                    {
                        title: "Dati Forniture",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Fertilizzanti",
                                value: "x, y, z"
                            },
                        ]
                    }
                ]
            },
            {
                name: "Distributore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Destinazione di consegna",
                        contentType: "value",
                        data: getLotto.data.distributore.data?.destinazioneDiConsegna ?? "Dato non trovato"
                    },
                    {
                        title: "Dati vendita",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Prezzo vendita",
                                value: getLotto.data.distributore.data?.prezzo ?? "Dato non trovato"
                            },
                            {
                                name: "Nome prodotto",
                                value: getLotto.data.distributore.data?.nomeProdotto ?? "Dato non trovato"
                            },
                            {
                                name: "Quantità",
                                value: getLotto.data.distributore.data?.quantitaVendita ?? "Dato non trovato"
                            },
                            {
                                name: "Nome Cliente",
                                value: getLotto.data.distributore.data?.nomeClienteVendita ?? "Dato non trovato"
                            },
                            {
                                name: "Data Vendita",
                                value: getLotto.data.distributore.data?.dataVendita ?? "Dato non trovato"
                            }
                        ]
                    },
                    {
                        title: "Dati Sensori Agronomo",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Superficie",
                                value: "2000mq"
                            },
                            {
                                name: "Umidità",
                                value: "43%"
                            },
                            {
                                name: "Temperatura",
                                value: "22°"
                            },
                            {
                                name: "Pioggia",
                                value: "3mm"
                            },
                        ]
                    }
                ]
            },
            {
                name: "Rivenditore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Data Raccolta",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Data",
                                value: "31/05/2023"
                            },
                        ]
                    },
                    {
                        title: "Dati Forniture",
                        contentType: "key-value",
                        countedData: 1,
                        data: [
                            {
                                name: "Fertilizzanti",
                                value: "x, y, z"
                            },
                        ]
                    }
                ]
            },
            {
                name: "Ente Certificatore",
                icon: MdAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Validazione",
                        contentType: "value",
                        data: getLotto.data.enteCertificatore.data?.validazione ?? "Dato non trovato"
                    },
                    {
                        title: "Certificazione",
                        contentType: "value",
                        data: getLotto.data.enteCertificatore.data?.certificazione ?? "Dato non trovato"
                    },
                    {
                        title: "Dati Sensori Agronomo",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Superficie",
                                value: "2000mq"
                            },
                            {
                                name: "Umidità",
                                value: "43%"
                            },
                            {
                                name: "Temperatura",
                                value: "22°"
                            },
                            {
                                name: "Pioggia",
                                value: "3mm"
                            },
                        ]
                    }
                ]
            },
        ]

        return (
            <>
                <div className="bg-surface_dark flex flex-col">
                    <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                        <h1 className="font-primary font-normal text-2xl">Dati</h1>
                        <h1 className="font-primary font-semibold text-2xl">Lotto 1</h1>
                    </div>
                    <div className="m-8 flex flex-row gap-4">
                        {
                            data.map((item, index) => {
                                return (
                                    <Actor className="w-60 self-start" key={index} data={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    });

export default ProductionChain;