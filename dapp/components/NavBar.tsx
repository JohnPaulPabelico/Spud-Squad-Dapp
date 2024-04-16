import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function NavBar() {
  const [barState, setBarState] = useState(false);

  return (
    <div>
      <div className={`absolute w-full overflow-hidden top-0 left-0`}>
        <div
          className={`absolute inset-0 z-0 bg-repeat ${
            barState ? "hidden" : "block"
          }`}
          style={{ backgroundImage: "url('/images/Grass Tile Upscaled.png')" }}
        />
        <div className="relative z-10 min-h-32 flex items-center justify-between top-0 shadow-xl px-10">
          <Image
            src="/images/Mascot.png"
            alt="logo"
            width={170}
            height={170}
            className="-translate-y-1"
          />
          <ul className="flex gap-10">
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2 lg:block hidden">
                Mint
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2 lg:block hidden">
                About
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2 lg:block hidden">
                Gallery
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2 lg:block hidden">
                FAQ
              </button>
            </li>
            <li
              className={`m-3 text-3xl cursor-pointer  bg-yellow-400 p-4 rounded-full hover:bg-yellow-500 transition duration-200 lg:hidden -translate-y-2"
              }`}
            >
              {barState ? (
                <GrClose
                  onClick={() => {
                    setBarState(!barState);
                    console.log(barState);
                  }}
                />
              ) : (
                <FaBars
                  onClick={() => {
                    setBarState(!barState);
                    console.log(barState);
                  }}
                />
              )}
            </li>
          </ul>
          <button className="pixelify font-semibold text-xl bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-50 shadow-lg -translate-y-2 lg:block hidden">
            Connect Wallet
          </button>
        </div>
      </div>
      <div
        className={`bg-green-600 min-h-dvh z-99 ${
          barState ? "block" : "hidden"
        } flex justify-center text-center items-center`}
      >
        <ul className="flex flex-col gap-10">
          <li>
            <button className="pixelify font-semibold text-4xl bg-yellow-400 px-4 py-3 rounded-full hover:bg-yellow-500 transition duration-50 shadow-lg -translate-y-2">
              Connect Wallet
            </button>
          </li>
          <li>
            <button className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50">
              Mint
            </button>
          </li>
          <li>
            <button className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50">
              About
            </button>
          </li>
          <li>
            <button className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50">
              Gallery
            </button>
          </li>
          <li>
            <button className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50">
              FAQ
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
