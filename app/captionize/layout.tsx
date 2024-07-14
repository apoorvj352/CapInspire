import { Logo } from "@/components/shared/SiteLogo/Logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-slate-100 w-full flex flex-col justify-center items-center p-2">
        <Logo />
        <div>Powered by AI</div>
      </div>
      {children}
    </>
  );
}
