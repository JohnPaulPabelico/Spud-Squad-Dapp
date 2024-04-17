import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Landing() {
  return (
    <div>
      <section
        id="about"
        style={{
          backgroundImage: 'url("images/Dirt Tile 2 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      ></section>
    </div>
  );
}

export default Landing;
