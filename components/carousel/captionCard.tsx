"use client";

import Image from "next/image";
import Link from "next/link";
import { ToastButton } from "../ToastButton";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function CaptionCard({ selected }: { selected: boolean }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] h-auto rounded-xl p-6 border  ${
          selected ? "border-4 border-black" : ""
        }`}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/assets/Designer.png"
            height="600"
            width="600"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <ToastButton
              label="Copy"
              description="Selected Caption Copied To Clipboard"
              title="Copied"
            />
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
        {selected && (
          <Image
            src={"/assets/arrow_up.png"}
            width={50}
            height={50}
            className="absolute left-[calc(50%-25px)] bottom-[-80px] rotate-180"
          />
        )}
      </CardBody>
    </CardContainer>
  );
}
