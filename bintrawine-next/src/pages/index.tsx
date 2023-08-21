import Head from "next/head";
import Actor, { ActorData } from "@/components/actor";
import { MdAgriculture } from "react-icons/md";
import ProductCard from "@/components/productCard";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>BinTraWine</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-surface_dark min-h-screen flex flex-col">
        <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center">
          <h1 className="font-primary font-semibold text-2xl">Catalogo (221)</h1>
        </div>
        <div className="p-4 grid grid-cols-4 grid-rows-2 gap-4">
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
          <ProductCard idLotto="1" idTerreno="1" name="terreno" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} tags={["tag1", "tag2"]} />
        </div>
      </main>
    </>
  );
}