import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function NavBar() {
  const [barState, setBarState] = useState(false);

  return (
    <div>
      <div className="fixed w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-repeat"
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
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2">
                Mint
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2">
                About
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2">
                Whitepaper
              </button>
            </li>
            <li>
              <button className="pixelify text-xl font-semibold hover:text-white hover:scale-110 transition duration-50 -translate-y-2">
                FAQ
              </button>
            </li>
          </ul>
          <button className="pixelify font-semibold text-xl bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-50 shadow-lg -translate-y-2">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
