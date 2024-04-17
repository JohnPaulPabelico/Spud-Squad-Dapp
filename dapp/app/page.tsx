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
      <div
        style={{
          backgroundImage: 'url("images/Dirt Joiner 1 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-32"
      ></div>
      <About />
      <div
        style={{
          backgroundImage: 'url("images/Dirt Joiner 2 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-32"
      ></div>
      <Gallery />
      <div
        style={{
          backgroundImage: 'url("images/Dirt Joiner 3 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-32"
      ></div>
      <FAQ />
      <Footer />
    </main>
  );
}
