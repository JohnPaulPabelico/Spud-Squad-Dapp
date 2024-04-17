import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

interface AccordionProps {
  title: string;
  answer: string;
}

function Accordion({ title, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="text-2xl pixelify">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span>{title}</span>
        <span className="text-3xl text-bold">
          {accordionOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black/80 text-xl ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`${
            accordionOpen
              ? "overflow-hidden mt-5 transition-all"
              : "overflow-hidden  transition-all"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
