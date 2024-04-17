import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
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
          backgroundImage: 'url("images/Dirt Tile Upscaled.png")',
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
          <div className="pixelify text-3xl lg:text-5xl text-bold bg-amber-500 rounded-3xl p-10  lg:min-h-[384px] min-w-[384px] lg:max-w-[481.281px] text-center">
            Mint a Spud Mate
          </div>
        </div>
      </section>
    </div>
  );
}
