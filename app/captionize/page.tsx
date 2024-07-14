"use client";
import { Caption_Strings } from "@/constants/strings";
import { Provider } from "react-redux";
import Store from "./../../Store/store";
import { GeneratedCaptions } from "./GeneratedCaptions";
import MicrophoneComponent from "./recorder";

export const page = () => {
  return (
    <Provider store={Store}>
      <div className="p-10 w-[60%] max-[1200px]:w-full min-h-screen flex flex-col gap-4 items-left">
        <h2 className="text-2xl mb-10 mt-3 font-sans font-bold item-left">
          {Caption_Strings.CaptionPageTitle}
        </h2>
        <MicrophoneComponent />
        <GeneratedCaptions />
      </div>
    </Provider>
  );
};

export default page;
