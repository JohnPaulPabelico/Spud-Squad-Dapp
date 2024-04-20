import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
function NavBar() {
  const [barState, setBarState] = useState(false);

  return (
    <div>
      <div className={`absolute w-full top-0 left-0`}>
        <div
          className={`absolute inset-0 z-0 bg-repeat ${
            barState ? "hidden" : "block"
          }`}
          style={{
            backgroundImage: "url('/Assets/Grass Tile Upscaled.png')",
          }}
        />
        <div className="relative z-10 min-h-32 flex items-center justify-between top-0 lg:px-10">
          <Image
            src="/Assets/Mascot.png"
            alt="logo"
            width={170}
            height={170}
            className="-translate-y-1"
          />
          <ul className="flex gap-10">
            <li>
              <Link
                href="#mint"
                className="pixelify font-semibold text-xl bg-green-400 px-2 py-1 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2 lg:block hidden"
              >
                Mint
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="pixelify font-semibold text-xl bg-green-400 px-2 py-1 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2 lg:block hidden"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="pixelify font-semibold text-xl bg-green-400 px-2 py-1 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2 lg:block hidden"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="pixelify font-semibold text-xl bg-green-400 px-2 py-1 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2 lg:block hidden"
              >
                FAQ
              </Link>
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
          <div className="z-999 lg:block hidden ">
            <WalletMultiButton
              style={{
                backgroundColor: "#FBBF24",
                borderRadius: "9999px",
                fontFamily: "var(--font-pixelify-sans)",
                color: "black",
                fontSize: "1.25rem",
                transform: "translateY(-0.5rem)",
              }}
            />
          </div>
          {/* <button className="pixelify font-semibold text-xl bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-50 shadow-lg -translate-y-2 lg:block hidden">
            Connect Wallet
          </button>{" "} */}
        </div>
      </div>
      <div
        className={`bg-green-600 min-h-dvh z-99 ${
          barState ? "block" : "hidden"
        } flex justify-center text-center items-center`}
      >
        <ul className="flex flex-col gap-10">
          <li>
            <div className="z-999">
              <WalletMultiButton
                style={{
                  backgroundColor: "#FBBF24",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-pixelify-sans)",
                  color: "black",
                  fontSize: "2.25rem",
                  transform: "translateY(-0.5rem)",
                }}
              />
            </div>
          </li>
          <li>
            <Link
              href="#mint"
              className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50"
              onClick={() => {
                setBarState(!barState);
                console.log(barState);
              }}
            >
              Mint
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50"
              onClick={() => {
                setBarState(!barState);
                console.log(barState);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50"
              onClick={() => {
                setBarState(!barState);
                console.log(barState);
              }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="pixelify text-4xl font-semibold hover:text-white hover:scale-110 transition duration-50"
              onClick={() => {
                setBarState(!barState);
                console.log(barState);
              }}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
