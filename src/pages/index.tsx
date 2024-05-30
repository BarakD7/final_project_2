// pages/index.js

import Head from "next/head";
import { useEffect } from "react";
import { useGlobalState } from "../store";
import { isWallectConnected, loadNfts } from "../utils/Adulam";
import Alert from "../components/Alert";
import Artworks from "../components/Artworks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loading from "../components/Loading";

export default function Home() {
  const [nfts] = useGlobalState("nfts");

  useEffect(() => {
    const fetchData = async () => {
      await isWallectConnected();
      await loadNfts();
      console.log("Blockchain Loaded");
    };

    fetchData();
  }, []);

  return (
    <div >
      <Head>
        <title>Final-Year Project</title>
        <meta
          name="description"
          content="Main page for Blockchain & AI project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
          <Hero />
        </div>
        <Artworks artworks={nfts} />
        <Footer />
        <Loading />
        <Alert />
      </div>
    </div>
  );
}
