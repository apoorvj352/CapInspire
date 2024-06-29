import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TABS } from "@/constants/tabs";
import Image from "next/image";

export const MobileNavBar = () => {
  return (
    <div className="hidden max-[950px]:flex">
      <Sheet>
        <SheetTrigger>
          <Image src={"/assets/hamburger.svg"} width={30} height={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {" "}
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
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-6 items-center px-2 text-black font-bold text-[18px]">
                {TABS.map((tabinfo) => {
                  const { icon, name, link } = tabinfo;
                  return (
                    <div
                      key={link}
                      className="text-center bg-slate-300 rounded-md px-4 py-4 w-full"
                    >
                      {name}
                    </div>
                  );
                })}

                {/* <div className="text-center bg-slate-300 rounded-md px-4 py-2 w-full">
                  Home
                </div> */}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
