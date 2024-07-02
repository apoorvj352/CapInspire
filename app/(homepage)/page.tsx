import { ExampleCaptions } from "@/components/ExampleCaptions";
import CaptionCarousel from "@/components/carousel/captionCarousel";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typing";
import Image from "next/image";

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

export const Demo = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Home = () => {
  const words = [
    {
      text: "Captionize",
    },
    {
      text: "your",
    },
    {
      text: "thoughts",
    },
    {
      text: "in",
    },
    {
      text: "in",
    },
    {
      text: "your",
    },
    {
      text: "local",
    },
    {
      text: "language",
    },
  ];
  return (
    <div className="min-w-full white min-h-screen flex flex-col gap-6 items-center p-8">
      <Image
        src={"/assets/ImageCaption.png"}
        width={300}
        height={300}
        className="rounded-md"
      />
      {/* <div className="text-3xl font-bold">
        Captionize your thoughts in your local language
      </div> */}
      <TypewriterEffectSmooth words={words} className="text-3xl font-bold" />
      <Button size={"lg"} className="text-xl">
        Captize using AI
      </Button>
      <div className="flex flex-col items-center m-8">
        <div className="font-bold text-6xl">100K+</div>
        <div className="font-bold text-4xl">Happy Users</div>
      </div>
      <CaptionCarousel />
      <ExampleCaptions />
      <Demo />
    </div>
  );
};

export default Home;
