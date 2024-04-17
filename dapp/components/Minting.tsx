import Image from "next/image";
import React, { useState } from "react";
import { SiSolana } from "react-icons/si";
import Carousel from "./Carousel";

const slides = [
  "/images/Gallery Images/1.svg",
  "/images/Gallery Images/2.svg",
  "/images/Gallery Images/3.svg",
  "/images/Gallery Images/4.svg",
  "/images/Gallery Images/5.svg",
  "/images/Gallery Images/6.svg",
  "/images/Gallery Images/7.svg",
];

export default function Minting() {
  return (
    <div className="">
      <section
        id="mint"
        style={{
          backgroundImage: 'url("images/Assets/Dirt Tile Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        <div className="flex lg:flex-row flex-col items-center lg:translate-y-64 translate-y-48 justify-center gap-5">
          <div className="max-w-sm shadow-lg">
            <Carousel autoSlide={true}>
              {slides.map((s, index) => (
                <Image
                  key={index}
                  alt="slides"
                  src={s}
                  height={400}
                  width={400}
                />
              ))}
            </Carousel>
          </div>
          <div className=" bg-amber-500 rounded-3xl p-10  lg:min-h-[384px] min-h-[340px] min-w-[384px] lg:max-w-[481.281px] text-center">
            <div className="pixelify text-3xl lg:text-5xl text-bold text-center">
              Mint a Spud Mate
            </div>
            <div className="pixelify text-lg lg:text-2xl text-bold text-center">
              Join the Spud Squad now!
            </div>
            <div className="flex items-center justify-center pixelify text-2xl lg:text-3xl text-bold text-center py-3 translate-y-6">
              Cost: 0.01 SOL <SiSolana className="ml-5" />
            </div>
            <button className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 bg-green-500 rounded-full text-center hover:bg-green-600 hover:scale-110 transition translate-y-12">
              Mint
            </button>
            <div className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 text-center  translate-y-12">
              0/999
            </div>
          </div>
        </div>
        <div className="p-32 lg:p-0"></div>
      </section>
    </div>
  );
}
