import Image from "next/image";
import React, { useState } from "react";

function Gallery() {
  return (
    <div>
      <section id="gallery" className="bg-amber-950 min-h-dvh ">
        <div className="pixelify text-5xl px-4 py-10 flex justify-center text-white items-center">
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
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/2.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/3.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/4.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
          </ul>
          <ul className="flex px-10 py-5 items-center justify-center gap-10 flex-row">
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
          </ul>
          <ul className="flex px-10 py-5 items-center justify-center gap-10 flex-row">
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
            <li>
              <Image
                src="images/Gallery Images/1.svg"
                height={150}
                width={150}
                alt="1"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
