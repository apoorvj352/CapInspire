"use client";
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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CaptionList from "./CaptionList";
import { CaptionCard } from "./captionCard";

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
      <AlertDialogContent className="min-w-[40%] md:w-full">
        <AlertDialogHeader className="flex justify-between items-center min-w-[40%]">
          <AlertDialogTitle className="relative w-full flex justify-between items-center text-3xl font-sans">
            <span>Trending Captions</span>
            <AlertDialogCancel asChild className="border-none">
              <button className="p-2">
                <svg
                  className="w-5 h-5 text-black dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </AlertDialogCancel>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="w-full">
          <CaptionList />
        </AlertDialogDescription>
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
