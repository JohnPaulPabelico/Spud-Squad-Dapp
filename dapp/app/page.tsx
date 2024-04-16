"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Minting from "../components/Minting";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Minting />
      <About />
    </main>
  );
}
