import Head from "next/head";
import Header from '@/components/header/header';
import Catalog from "../components/tabContents/catalog";
import { MdClose, MdOutlineHome } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { api } from "@/utils/api";
import NewChain from "@/components/tabContents/newChain";
import ProductionChain from "@/components/tabContents/productionChain";
import Loader from "@/components/loading";


export interface TabProps {
  triggerKey: string;
  triggerName: string;
  status: "IN CORSO" | "COMPLETATO",
};

export default function LandingPage() {

  const utils = api.useContext()
  const getTerreni = api.blockChainRouter.getLatestIDLotto.useQuery();
  const setSensori = api.blockChainRouter.setSensoriData.useMutation({
    onSuccess() {
      utils.blockChainRouter.getSensoriData.invalidate()
    }
  })
  const [sensoriSetted, setSensoriSetted] = useState<boolean>(false);

  const [tabs, setTabs] = useState<TabProps[]>([]);
  const [currentTab, setCurrentTab] = useState<string>("catalogo");

  if (getTerreni.isFetched) {
    if (getTerreni.data === 1 && !sensoriSetted) {
      setSensori.mutate(1)
      setSensoriSetted(true)
    }
  }

  useEffect(() => {
    const isTabPresent = tabs.some(tab => tab.triggerKey === currentTab)
    if (!isTabPresent) setCurrentTab("catalogo")
  }, [tabs])

  if (getTerreni.isLoading) {
    return (
      <>
        <Head>
          <title>BinTraWine</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      </>
    )
  }

  if (getTerreni.isError) {
    return (
      <>
        <Head>
          <title>BinTraWine</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex justify-center items-center">
          <p>Errore nel caricamento</p>
        </div>
      </>
    )
  }

  const deleteTab = (index: number) => {
    setTabs(oldState => oldState.filter((_, i) => i !== index));
  }

  const handleDeletion = (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
    e.stopPropagation()
    e.preventDefault()
    deleteTab(index)
  }

  return (
    <>
      <Head>
        <title>BinTraWine</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-areas-layout grid-cols-layout grid-rows-layout bg-surface_dark min-h-screen">
        <Header number_of_lotti={getTerreni.data!} setTabs={setTabs} className='grid-in-header' />
        <Tabs className="grid-in-main flex flex-col bg-surface_dark" value={currentTab}>
          <TabsList>
            <TabsTrigger onClick={() => setCurrentTab("catalogo")} className="bg-primary" value="catalogo">
              <MdOutlineHome size={24} />
              <p className="font-primary">Catalogo</p>
            </TabsTrigger>
            <Separator orientation="vertical" className="h-8 bg-black_dim" />
            {
              tabs.map((tab, index) => (
                <TabsTrigger onClick={() => { setCurrentTab(tab.triggerKey) }} key={index} className="bg-primary_light text-white" value={tab.triggerKey}>
                  <p className="font-primary">{tab.triggerName}</p>
                  <MdClose className="hover:text-primary" onClick={(e) => handleDeletion(e, index)} size={24} />
                </TabsTrigger>
              ))
            }
          </TabsList>
          <TabsContent className="flex justify-center items-center" value="catalogo">
            {
              getTerreni.isLoading ?
                <Loader /> : getTerreni.isError ?
                  <p className="text-base font-primary font-normal">Errore nel caricamento, provare a ricaricare la pagina</p> :
                  <Catalog setTabs={setTabs} number_of_chains={getTerreni.data!} />
            }
          </TabsContent>
          {
            tabs.map((tab, index) => (
              <TabsContent key={index} value={tab.triggerKey}>
                {
                  tab.status === "IN CORSO" ? <NewChain idLotto={tab.triggerKey} /> : <ProductionChain idLotto={tab.triggerKey} />
                }
              </TabsContent>
            ))
          }
        </Tabs>
      </main>
    </>
  );
}