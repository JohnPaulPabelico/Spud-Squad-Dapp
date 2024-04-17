import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useContext } from "react";
function Footer() {
  return (
    <div>
      {" "}
      <section
        id="footer"
        className="min-h-32 bg-gray-900 flex justify-between items-center px-10"
      >
        <div className="text-2xl text-white font-bold titillium ">
          Copyright © 2024. All rights are reserved
        </div>
        <div className="flex justify-center lg:justify-start text-4xl text-white">
          <a
            href="https://github.com/JohnPaulPabelico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <IoLogoGithub />
          </a>
          <a
            href="linkedin.com/in/jp-pabelico/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
