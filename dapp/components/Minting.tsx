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
      <section id="mint" className="bg-amber-700 min-h-dvh">
        <div className=" flex translate-y-64 justify-center gap-5">
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
          <div className=" bg-black bg-opacity-30 rounded-3xl p-10">
            Mint Panel
            <button>Mint</button>
          </div>
        </div>
      </section>
    </div>
  );
}
