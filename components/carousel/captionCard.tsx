"use client";

import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function CaptionCard({ selected }: { selected: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-cover bg-center bg-no-repeat bg-[url(/assets/mountain.jpg)] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] max-md:w-[300px] h-auto rounded-xl p-6 border bg-opacity-20 ${
          selected ? "border-4 border-black" : "opacity-40"
        }`}
      >
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-25 rounded-md"></div>
        <div onClick={togglePopover} className="bg-cover">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="w-full h-[300px] flex justify-center items-center text-3xl font-bold italic text-white">
              {selected
                ? "Sometimes, you just need to change your altitude."
                : ""}
            </div>
          </CardItem>
          <div className="flex justify-center items-center mt-6">
            {selected && (
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                View Similar
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
