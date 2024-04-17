import Image from "next/image";
import React, { useState } from "react";

function Gallery() {
  return (
    <div>
      <section
        id="gallery"
        style={{
          backgroundImage: 'url("images/Assets/Dirt Tile 3 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        <div className="pixelify text-5xl px-4 py-16 flex justify-center text-white items-center">
          Gallery
        </div>
        <div>
          <div className="lg:w-2/5 mx-auto">
            <ul className="grid lg:grid-cols-4 grid-cols-3 justify-items-center gap-y-10">
              <li>
                <Image
                  src="images/Gallery Images/1.svg"
                  height="150"
                  width="150"
                  alt="1"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/2.svg"
                  height="150"
                  width="150"
                  alt="2"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/3.svg"
                  height="150"
                  width="150"
                  alt="3"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/4.svg"
                  height="150"
                  width="150"
                  alt="4"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/5.svg"
                  height="150"
                  width="150"
                  alt="5"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/6.svg"
                  height="150"
                  width="150"
                  alt="6"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/7.svg"
                  height="150"
                  width="150"
                  alt="7"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/8.svg"
                  height="150"
                  width="150"
                  alt="8"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/9.svg"
                  height="150"
                  width="150"
                  alt="9"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/10.svg"
                  height="150"
                  width="150"
                  alt="10"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/11.svg"
                  height="150"
                  width="150"
                  alt="11"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
              <li>
                <Image
                  src="images/Gallery Images/12.svg"
                  height="150"
                  width="150"
                  alt="12"
                  className="hover:scale-125 transition duration-300"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
