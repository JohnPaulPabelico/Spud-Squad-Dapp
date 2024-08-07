import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { CandyMint } from "./CandyMint";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { publicKey } from "@metaplex-foundation/umi";
import {
  fetchCandyMachine,
  CandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import { clusterApiUrl } from "@solana/web3.js";

import { Reveal } from "./Reveal";

const spudslides = [
  "/Gallery Images/1.svg",
  "/Gallery Images/2.svg",
  "/Gallery Images/3.svg",
  "/Gallery Images/4.svg",
  "/Gallery Images/5.svg",
  "/Gallery Images/6.svg",
  "/Gallery Images/7.svg",
];

interface MintingProps {
  readonly setSuccessMessage: (message: string | null) => void;
}

const quicknodeEndpoint =
  process.env.NEXT_PUBLIC_RPC || clusterApiUrl("devnet");
const candyMachineAddress = publicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ?? ""
);

export default function Minting({ setSuccessMessage }: MintingProps) {
  const [candyMachineData, setCandyMachineData] = useState<CandyMachine | null>(
    null
  );
  const [itemsRedeemed, setItemsRedeemed] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const umi = createUmi(quicknodeEndpoint);
        const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
        setCandyMachineData(candyMachine);
        setItemsRedeemed(Number(candyMachine.itemsRedeemed));
      } catch (error) {
        console.error("Error fetching candy machine:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="z-1">
      <section
        id="mint"
        style={{
          backgroundImage: 'url("/Assets/Dirt Tile Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        <div className="flex lg:flex-row flex-col items-center lg:translate-y-64 translate-y-48 justify-center gap-5">
          <div className="max-w-sm shadow-lg">
            <Reveal>
              <Carousel autoSlide={true}>
                {spudslides.map((s, index) => (
                  <Image
                    key={index}
                    alt="slides"
                    src={s}
                    height={400}
                    width={400}
                  />
                ))}
              </Carousel>
            </Reveal>
          </div>
          <Reveal>
            <div className=" bg-amber-500 rounded-3xl p-10  lg:min-h-[384px] min-h-[340px] max-w-[384px] lg:min-w-[384px] lg:max-w-[481.281px] text-center">
              <div className="pixelify text-3xl lg:text-5xl text-bold text-center">
                Mint a Spud Mate
              </div>
              <div className="pixelify text-lg lg:text-2xl text-bold text-center">
                Join the Spud Squad now!
              </div>
              <div className="flex items-center justify-center pixelify text-2xl lg:text-3xl text-bold text-center py-3 translate-y-6">
                Cost: 0.1 SOL
              </div>
              <CandyMint setSuccessMessage={setSuccessMessage} />
              {candyMachineData ? (
                <div className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 text-center translate-y-12 mt-2">
                  {itemsRedeemed !== null
                    ? `${itemsRedeemed}/${candyMachineData.itemsLoaded}`
                    : "Loading..."}
                </div>
              ) : (
                <div className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 text-center translate-y-12 mt-2">
                  Loading...
                </div>
              )}
            </div>
          </Reveal>
        </div>
        <div className="p-32 lg:p-0"></div>
      </section>
    </div>
  );
}
