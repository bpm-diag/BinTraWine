import Head from "next/head";
import Actor, { ActorData } from "@/components/actor";
import PageTitle from "@/components/pageTitle";
import { MdAgriculture } from "react-icons/md";

export default function ProductionChain() {

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
                    title: "Dati Sensori Agronomo",
                    contentType: "textual",
                    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl eget nunc aliquam aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl eget nunc aliquam aliquet."
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
                    data: "31/05/2023"
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
                }
            ]
        },
    ]

    return (
        <>
            <Head>
                <title>BinTraWine</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-surface_dark min-h-screen flex flex-col">
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center">
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
            </main>
        </>
    );
}