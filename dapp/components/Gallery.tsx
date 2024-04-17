import Image from "next/image";
import React, { useState } from "react";

function Gallery() {
  return (
    <div>
      <section
        id="gallery"
        style={{
          backgroundImage: 'url("images/Dirt Tile 3 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        <div className="pixelify text-5xl px-4 py-16 flex justify-center text-white items-center">
          Gallery
        </div>
        <div>
          <ul className="flex px-10 py-5 items-center justify-center gap-10 flex-row">
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/2.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/3.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/4.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
          </ul>
          <ul className="flex px-10 py-5 items-center justify-center gap-10 flex-row">
            <li>
              <Image
                src="images/Gallery Images/5.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/6.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/7.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/8.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
          </ul>
          <ul className="flex px-10 py-5 items-center justify-center gap-10 flex-row">
            <li>
              <Image
                src="images/Gallery Images/9.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/10.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/11.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/12.svg"
                height={150}
                width={150}
                alt="1"
                className="hover:scale-125 transition duration-300"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
