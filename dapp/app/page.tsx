"use client";
import { useEffect, useState, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import * as web3 from "@solana/web3.js";

import NavBar from "../components/NavBar";
import Minting from "../components/Minting";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  const [rendered, setrendered] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    setrendered(true);
  }, [setrendered]);

  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <main>
      {rendered && (
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div>
                {" "}
                <NavBar successMessage={successMessage} />
                <Minting setSuccessMessage={setSuccessMessage} />
                <div
                  style={{
                    backgroundImage:
                      'url("/Assets/Dirt Joiner 1 Upscaled.png")',
                  }}
                  className="min-h-32 bg-repeat"
                ></div>
                <About />
                <div
                  style={{
                    backgroundImage:
                      'url("/Assets/Dirt Joiner 2 Upscaled.png")',
                  }}
                  className="min-h-32 bg-repeat"
                ></div>
                <Gallery />
                <div
                  style={{
                    backgroundImage:
                      'url("/Assets/Dirt Joiner 3 Upscaled.png")',
                  }}
                  className="min-h-32 bg-repeat"
                ></div>
                <Faq />
                <Footer />
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      )}
    </main>
  );
}
