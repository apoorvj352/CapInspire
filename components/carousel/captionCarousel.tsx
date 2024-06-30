"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { CaptionCard } from "./captionCard";

// const captions = [
//   {
//     captions,
//   },
// ];

export const CaptionCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-[90%] flex gap-10 py-6"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
            <CaptionCard selected={current == index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CaptionCarousel;
