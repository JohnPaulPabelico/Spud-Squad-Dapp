"use client";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { useEffect, useState, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import * as web3 from "@solana/web3.js";

const inter = Inter({ subsets: ["latin"] });

const pixelify_sans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [rendered, setrendered] = useState(false);

  useEffect(() => {
    setrendered(true);
  }, [setrendered]);

  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <html lang="en">
      <body className={`${pixelify_sans.variable}`}>
        {" "}
        {rendered && (
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        )}
      </body>
    </html>
  );
}
