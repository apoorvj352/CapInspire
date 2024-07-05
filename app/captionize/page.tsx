"use client";
import { PreferenceButton } from "@/components/Preferences/PreferenceButtons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils/cn";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import { MoodList } from "./MoodList";
import Language from "./Language";
import { Provider } from "react-redux";
import Store from "./../../Store/store";

export const MoodCard = () => {
  return (
    <div className="max-w-xs w-[200px]">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-[150px] rounded-md shadow-xl mx-auto flex flex-col justify-center items-center p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative text-center">
            Happy
          </h1>
        </div>
      </div>
    </div>
  );
};

export const MoodButton = () => {
  return (
    <Button
      variant={"outline"}
      className="rounded-3xl bg-white text-black font-sans gap-5"
    >
      Your MOOD &#128578;
      <a
        href="#" // InstaGram
        className="[&>svg]:fill-[#c13584] hover:text-gray-500"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 11.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zM16 11a2 2 0 11-4 0h-2a2 2 0 11-4 0 2 2 0 013.5-1.44A4.98 4.98 0 0112 8c1.57 0 3 .75 3.5 1.94A2 2 0 0116 11zM9 13.5H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9c.28 0 .5.22.5.5s-.22.5-.5.5zM12 18c-1.65 0-3-1.35-3-3h6c0 1.65-1.35 3-3 3z" />
          </svg>
        </span>
      </a>
    </Button>
  );
};

export const page = () => {
  return (
    <Provider store={Store}>
      <div className="p-10 w-1/2 min-h-screen flex flex-col gap-2 items-left">
        <h2 className="text-2xl mb-10 mt-3 font-sans font-bold item-left">
          Feeling ......{" "}
        </h2>
        <div className="flex flex-wrap gap-6  items-center">
          <MoodList />
          <Language />
        </div>
      </div>
    </Provider>
  );
};

export default page;
