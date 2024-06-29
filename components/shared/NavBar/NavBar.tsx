import { TABS } from "@/constants/tabs";
import Image from "next/image";
import { MobileNavBar } from "./MobileNavBar";

export const NavBar = () => {
  return (
    <div className="w-full bg-opacity-40 bg-slate-500 h-16 flex items-center px-8 justify-between">
      <div className="flex gap-2 items-center">
        <Image
          src={"/assets/Designer.png"}
          height={50}
          width={50}
          className="m-2"
        />
        <div className="text-xl italic">
          <span>Cap</span>
          <span className="font-bold">Inspire</span>
        </div>
      </div>

      <div className="flex items-center gap-8 max-[950px]:hidden">
        {TABS.map((tabinfo) => {
          const { icon, link, name } = tabinfo;
          return (
            <div className="text-xl font-medium" key={link}>
              {name}
            </div>
          );
        })}
        {/* 
        <div className="text-xl font-medium">Captionize</div>
        <div className="text-xl font-medium">Example Captions</div>
        <div className="text-xl font-medium">Trending</div>
        <div className="text-xl font-medium">About Us</div> */}
      </div>
      <MobileNavBar/>
    </div>
  );
};
