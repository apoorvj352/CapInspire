import Image from "next/image";
export const Logo = () => {
  return (
    <div className="flex items-center">
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
  );
};
