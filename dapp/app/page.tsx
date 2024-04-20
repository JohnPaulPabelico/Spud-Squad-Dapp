"use client";

import NavBar from "../components/NavBar";
import Minting from "../components/Minting";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Spud Squad</title>
        <meta
          name="dOfficial website of the Spud Squadescription"
          content="Spud Squad"
        />
      </Head>
      <NavBar />
      <Minting />
      <div
        style={{
          backgroundImage: 'url("/Assets/Dirt Joiner 1 Upscaled.png")',
        }}
        className="min-h-32 bg-repeat"
      ></div>
      <About />
      <div
        style={{
          backgroundImage: 'url("/Assets/Dirt Joiner 2 Upscaled.png")',
        }}
        className="min-h-32 bg-repeat"
      ></div>
      <Gallery />
      <div
        style={{
          backgroundImage: 'url("/Assets/Dirt Joiner 3 Upscaled.png")',
        }}
        className="min-h-32 bg-repeat"
      ></div>
      <FAQ />
      <Footer />
    </main>
  );
}
