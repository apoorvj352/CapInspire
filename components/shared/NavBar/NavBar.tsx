import { TABS } from "@/constants/tabs";
import { Logo } from "../SiteLogo/Logo";
import { MobileNavBar } from "./MobileNavBar";

export const NavBar = () => {
  return (
    <div className="w-full bg-opacity-40 bg-zinc-200 h-16 flex items-center px-8 justify-between">
      <Logo />
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
      <MobileNavBar />
    </div>
  );
};
