import { Logo } from "@/components/shared/SiteLogo/Logo";
import { Progress } from "@/components/ui/progress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-slate-100 w-full flex flex-col justify-center items-center p-2">
        <Logo />
        <div>Step 1 of 4</div>
      </div>
      <Progress className="w-full rounded-none h-1" value={25} />
      {children}
    </>
  );
}
