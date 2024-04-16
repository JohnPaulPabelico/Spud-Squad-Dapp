import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Minting() {
  return (
    <div className="">
      <section className="bg-amber-700 min-h-dvh">
        <div className=" flex translate-y-80 justify-center gap-5">
          <Image
            src={"/images/Gallery Images/1.png"}
            alt="logo"
            width={300}
            height={300}
            className="rounded-3xl"
          />
          <div className=" bg-black bg-opacity-30 rounded-3xl p-10">
            Mint Panel
            <button>Mint</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Minting;
