"use client";
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
import React from "react";

export const MoodCard = () => {
  return (
    // <div>
    //   <Card className="w-[100px] box-border">
    //     <CardContent className="w-[100px] p-0">
    //       <Image src={"/assets/Designer.png"} width={100} height={80}/>
    //     </CardContent>
    //   </Card>
    // </div>
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
          {/* <p className="font-normal text-base text-gray-50 relative my-4">
            This card is for some special elements, like displaying background
            gifs on hover only.
          </p> */}
        </div>
      </div>
    </div>
  );
};

const Languages = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? Languages.find((Language) => Language.value === value)?.label
            : "Select Language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Language..." />
          <CommandEmpty>No Language found.</CommandEmpty>
          <CommandGroup>
            {Languages.map((Language) => (
              <CommandItem
                key={Language.value}
                value={Language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === Language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {Language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export const page = () => {
  return (
    <div className="p-10 min-w-full min-h-screen flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Describe your thoughts...</h2>
      <h4 className="mb-3 mt-3">Select Mood</h4>
      <div className="flex flex-wrap gap-6">
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
      </div>
      <h4 className="mb-3 mt-3">Select Language</h4>
      <ComboboxDemo />
    </div>
  );
};

export default page;
