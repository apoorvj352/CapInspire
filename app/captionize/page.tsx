"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/utils/cn";
import { Provider, useSelector } from "react-redux";
import Store from "./../../Store/store";
import MicrophoneComponent from "./recorder";
import { TextDecorater } from "@/utils/TextDecorator";
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
const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
export const StylesCaptionList = ({ text }: { text: string }) => {
  const captions = [
    TextDecorater(text)[0],
    TextDecorater(text)[1],
    TextDecorater(text)[2],
    TextDecorater(text)[3],
    TextDecorater(text)[4],
    TextDecorater(text)[5],
  ];
  return (
    <div className="flex flex-col">
      {captions.map((caption, index) => (
        <div key={index} className="flex items-center justify-between p-4 mb-2">
          <div className="text-lg text-black flex-1 pr-4">{caption}</div>
          <button
            className="p-2 mt-2 sm:mt-0 sm:ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => copyToClipboard(caption)}
          >
            <svg
              className="w-5 h-5 text-gray-900 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="5" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <button className="bg-neutral-500 text-white py-1 px-2 ml-5 rounded hover:bg-neutral-700">
            Preview
          </button>
        </div>
      ))}
    </div>
  );
};
export const MoreStylesSection = ({ text }: { text: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>View in More Styles</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[40%] md:w-full">
        <AlertDialogHeader className="flex justify-between items-center min-w-[40%]">
          <AlertDialogTitle className="relative w-full flex justify-between items-center text-3xl font-sans">
            <span>Pick your style</span>
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
          <StylesCaptionList text={text} />
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const GeneratedCaption = ({
  label,
  index,
}: {
  label: string;
  index: number;
}) => {
  return (
    <li className="flex items-center justify-between space-x-4 rounded-md p-4">
      <span>{label}</span>
      <MoreStylesSection text={label} />
    </li>
  );
};
export const GeneratedCaptions = () => {
  const captions = useSelector((state) => state.generatedCaptions);
  return captions.length !== 0 ? (
    <>
      <div
        id="generated-captions"
        defaultValue="option-one"
        className="p-4 bg-white rounded-md max-h-100 border-2 border-black overflow-scroll font-sans"
      >
        {captions.map((data, index) => {
          return (
            <GeneratedCaption index={index} label={data.caption} key={index} />
          );
        })}
      </div>
    </>
  ) : (
    <></>
  );
};

export const page = () => {
  return (
    <Provider store={Store}>
      <div className="p-10 w-1/2 max-[1200px]:w-full min-h-screen flex flex-col gap-4 items-left">
        <h2 className="text-2xl mb-10 mt-3 font-sans font-bold item-left">
          Describe your thoughts...
        </h2>
        <MicrophoneComponent />
        <GeneratedCaptions />
      </div>
    </Provider>
  );
};

export default page;
