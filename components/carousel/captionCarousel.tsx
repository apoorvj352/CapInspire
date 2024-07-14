"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Caption_Strings } from "@/constants/strings";
import React from "react";
import { ListDialog } from "../Dialog/ListDialog";
import { CaptionCard } from "./CaptionCard";
import CaptionList from "./CaptionList";

export const PopoverCaptions = ({ selected }: { selected: boolean }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const moodListDialogProps = {
    label: Caption_Strings.Label,
    title: Caption_Strings.Title,
    dialogDescriptionComponent: CaptionList,
    dialogTriggerComponent: CaptionCard,
    dialogTriggerComponentProps: selected,
  };
  return <ListDialog {...moodListDialogProps} />;
};

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
      className="w-[80%] flex py-6 box-border"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 flex justify-center p-0"
          >
            <PopoverCaptions selected={current === index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CaptionCarousel;
