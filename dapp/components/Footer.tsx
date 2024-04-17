import Image from "next/image";
import React, { useContext } from "react";
import { SiOpensea } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
function Footer() {
  return (
    <div>
      {" "}
      <section
        id="footer"
        className="min-h-32 bg-gray-900 flex justify-between items-center px-10"
        style={{
          backgroundImage: 'url("/Assets/Stone Footer.png")',
          backgroundRepeat: "repeat",
        }}
      >
        <div className="pixelify text-xl text-white font-bold titillium ">
          Copyright © 2024. All rights are reserved
        </div>
        <div className="flex justify-center lg:justify-start text-4xl text-white">
          <a
            href="https://github.com/JohnPaulPabelico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <SiTwitter />
          </a>
          <a
            href="linkedin.com/in/jp-pabelico/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
          >
            <SiOpensea />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
