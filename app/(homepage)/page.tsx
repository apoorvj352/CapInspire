import CaptionCarousel from "@/components/carousel/captionCarousel";
import Footer from "@/components/shared/NavBar/Footer";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export const metrics = [
  {
    img: "/assets/caption.png",
    label: "Captions Generated",
    value: "1M+",
  },
  {
    img: "/assets/IncreasingGraph.png",
    label: "Users",
    value: "100k+",
  },
  {
    img: "/assets/customer.png",
    label: "Customer Satisfaction",
    value: "99%",
  },
];

export const Metric = ({
  img,
  value,
  label,
}: {
  img: string;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <div className="mb-4">
        <Image src={img} width={50} height={50} />
      </div>
      <div className="font-bold text-6xl max-md:text-3xl">{value}</div>
      <div className="text-4xl w-auto text-center max-md:text-2xl">{label}</div>
    </div>
  );
};
export const MetricSection = () => {
  return (
    <div className="flex w-full justify-between max-md:flex-col max-md:items-center">
      {metrics.map((metric) => {
        return <Metric key={metric.label} {...metric} />;
      })}
    </div>
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
    <div className="2xl:max-w-[1534px] max-2xl:min-w-full white min-h-screen flex flex-col gap-6 items-center p-8 px-20 max-md:p-2 max-lg:px-2">
      <div className="w-full pb-20 flex justify-between items-center px-20 max-md:flex-wrap max-md:px-10 max-md:justify-center max-md:pb-0">
        <div className="flex flex-col justify-center gap-10 max-md:gap-4 w-[50%] max-md:w-full">
          <div
            className={`text-6xl max-md:text-3xl font-extrabold max-md:mt-8`}
          >
            Your Moments
            <br /> Our Words ...
          </div>
          <div className="text-lg">
            Experience the magic of personalized captions that perfectly reflect
            your mood and style, transforming every post into a masterpiece.
          </div>
          <Button
            size={"default"}
            className="text-xl w-[150px] py-8 max-md:py-4 max-md:text-lg"
          >
            Captionize
          </Button>
        </div>
        <iframe
          className="max-md:order-first w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          src="https://lottie.host/embed/b6b32bca-933a-45ae-9534-85e722ded5e5/sMnL9QARRo.json"
        ></iframe>
      </div>
      <MetricSection />
      <CaptionCarousel />
      <Footer />
    </div>
  );
};

export default Home;
