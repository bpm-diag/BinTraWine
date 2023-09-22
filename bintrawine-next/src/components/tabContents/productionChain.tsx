import Actor, { ActorData } from "@/components/actor";
import { MdOutlineAgriculture, MdOutlineLocalShipping, MdOutlineWineBar, MdProductionQuantityLimits, MdOutlineLocalFlorist, MdOutlineSell, MdOutlineSafetyCheck } from "react-icons/md";
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
        const getDatiSensori = api.blockChainRouter.getSensoriData.useQuery(Number(idLotto))
        if (getDatiSensori.isFetched) {
            console.log(getDatiSensori.data)
        }

        if (getLotto.isLoading || getDatiSensori.isLoading) {
            return (
                <div className="bg-surface_dark flex justify-center items-center">
                    <Loader />
                </div>
            )
        }

        if (getLotto.isError || getDatiSensori.isError) {
            return (
                <div className="bg-surface_dark flex justify-center items-center">
                    <p>Errore nel caricamento, provare a ricaricare</p>
                </div>
            )
        }

        const data: ActorData[] = [
            {
                name: "Agronomo",
                icon: MdOutlineAgriculture,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Dati Sensori Agronomo",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Superficie",
                                value: getDatiSensori.data.agronomo?.superficie + "mq" ?? "Dato non trovato"
                            },
                            {
                                name: "Umidità",
                                value: getDatiSensori.data.agronomo?.umidita + "%" ?? "Dato non trovato"
                            },
                            {
                                name: "Temperatura",
                                value: getDatiSensori.data.agronomo?.temperatura + "°" ?? "Dato non trovato"
                            },
                            {
                                name: "Pioggia",
                                value: getDatiSensori.data.agronomo?.pioggia + "mm" ?? "Dato non trovato"
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
                icon: MdOutlineLocalFlorist,
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
                    },
                    {
                        title: "Dati Sensori Viticoltore",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Quantità Fertilizzanti",
                                value: getDatiSensori.data.viticoltore?.quantitaFertilizzanti + "l" ?? "Dato non trovato"
                            },
                            {
                                name: "Tipologia Uva",
                                value: getDatiSensori.data.viticoltore?.tipologiaUva ?? "Dato non trovato"
                            },
                            {
                                name: "Quantità uva raccolta",
                                value: getDatiSensori.data.viticoltore?.quantitaUvaRaccolta + "kg" ?? "Dato non trovato"
                            },
                            {
                                name: "Temperatura",
                                value: getDatiSensori.data.viticoltore?.temperatura + "°" ?? "Dato non trovato"
                            },
                            {
                                name: "Umidità",
                                value: getDatiSensori.data.viticoltore?.umidita + "%" ?? "Dato non trovato"
                            },
                        ]
                    },
                ]
            },
            {
                name: "Produttore",
                icon: MdProductionQuantityLimits,
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
                                name: "Peso arrivo",
                                value: getDatiSensori.data.produttore?.pesoArrivo + "kg" ?? "Dato non trovato"
                            },
                            {
                                name: "Peso prodotto finito",
                                value: getDatiSensori.data.produttore?.pesoProdottoFinito + "kg" ?? "Dato non trovato"
                            },
                            {
                                name: "Id container",
                                value: getDatiSensori.data.produttore?.idContainer ?? "Dato non trovato"
                            },
                            {
                                name: "Temperatura container",
                                value: getDatiSensori.data.produttore?.temperaturaContainer + "°" ?? "Dato non trovato"
                            },
                        ]
                    }
                ]
            },
            {
                name: "Imbottigliatore",
                icon: MdOutlineWineBar,
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
                        title: "Dati Sensori Imbottigliatore",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Quantità vino imbottigliato",
                                value: getDatiSensori.data.imbottigliatore?.quantitaVinoImbottigliata + "l" ?? "Dato non trovato"
                            },
                            {
                                name: "Quantità prodotto ricevuto",
                                value: getDatiSensori.data.imbottigliatore?.quantitaProdottoRicevuta + "kg" ?? "Dato non trovato"
                            },
                            {
                                name: "Gradazione alcolica",
                                value: getDatiSensori.data.imbottigliatore?.gradazioneAlcolica + "°" ?? "Dato non trovato"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Distributore",
                icon: MdOutlineLocalShipping,
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
                                value: String(getLotto.data.distributore.data?.quantitaVendita) ?? "Dato non trovato"
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
                        title: "Dati Sensori Distributore",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Quantità trasportata",
                                value: getDatiSensori.data.distributore?.quantitaTrasportata + "kg" ?? "Dato non trovato"
                            },
                            {
                                name: "Temperature di trasporto",
                                value: getDatiSensori.data.distributore?.temperaturaTrasporto + "°" ?? "Dato non trovato"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Rivenditore",
                icon: MdOutlineSell,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Dati Sensori Rivenditore",
                        contentType: "key-value",
                        data: [
                            {
                                name: "Quantità trasportata",
                                value: getDatiSensori.data.rivenditore?.tipologiaQuantita ?? "Dato non trovato"
                            }
                        ]
                    },
                    //{
                    //    title: "Dati Forniture",
                    //    contentType: "key-value",
                    //    countedData: 1,
                    //    data: [
                    //        {
                    //            name: "Fertilizzanti",
                    //            value: "x, y, z"
                    //        },
                    //    ]
                    //}
                ]
            },
            {
                name: "Ente Certificatore",
                icon: MdOutlineSafetyCheck,
                lastUpdate: "14/06/2023, 13:48",
                actorItemData: [
                    {
                        title: "Validazione",
                        contentType: "textual",
                        data: getLotto.data.enteCertificatore.data?.validazione ?? "Dato non trovato"
                    },
                    {
                        title: "Certificazione",
                        contentType: "textual",
                        data: getLotto.data.enteCertificatore.data?.certificazione ?? "Dato non trovato"
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