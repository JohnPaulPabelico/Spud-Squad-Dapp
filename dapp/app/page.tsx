"use client";

import NavBar from "../components/NavBar";
import Minting from "../components/Minting";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Minting />
      <About />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}
