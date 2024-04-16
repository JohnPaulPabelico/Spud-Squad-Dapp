import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function NavBar() {
  const [barState, setBarState] = useState(false);

  return (
    <div>
      <section className="bg-yellow-400 bg-opacity-70 flex items-center lg:fixed fixed top-0 w-full shadow px-10 min-h-24 justify-between z-10">
        <Image src="/images/Mascot.png" alt="logo" width={150} height={150} />
        <ul className="flex gap-10">
          <li>
            <button className="pixelify text-xl hover:text-white hover:-translate-y-1 transition duration-50">
              Mint
            </button>
          </li>
          <li>
            <button className="pixelify text-xl hover:text-white hover:-translate-y-1 transition duration-50">
              About
            </button>
          </li>
          <li>
            <button className="pixelify text-xl hover:text-white hover:-translate-y-1 transition duration-50">
              Whitepaper
            </button>
          </li>
          <li>
            <button className="pixelify text-xl hover:text-white hover:-translate-y-1 transition duration-50">
              FAQ
            </button>
          </li>
          {/* <li
            className={`m-3 text-2xl cursor-pointer hover:text-blue-500 transition duration-200 lg:hidden`}
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
          </li> */}
        </ul>
        <button className="pixelify text-xl bg-yellow-200 px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-50 shadow-lg ">
          Connect Wallet
        </button>
      </section>
    </div>
  );
}

export default NavBar;
