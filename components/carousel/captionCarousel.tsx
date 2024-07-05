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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CaptionList from "./CaptionList";

export const PopoverCaptions = ({
  value,
  selected,
}: {
  value: string;
  selected: boolean;
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <CaptionCard value={value} selected={selected} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="relative">
            Trending Captions
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CaptionList />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Copy</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const CaptionCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const list = ["Mountains", "Beach", "Friends", "Love", "Fashion"];
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
            <PopoverCaptions value={list[index]} selected={current == index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CaptionCarousel;
