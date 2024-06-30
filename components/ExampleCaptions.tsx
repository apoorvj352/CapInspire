import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ToastButton } from "./ToastButton";
export const Caption = () => {
  return (
    <Card className="pt-6">
      <CardContent>
        <p>𝓟𝓪𝓻𝓽𝔂𝓲𝓷𝓰 𝔀𝓲𝓽𝓱 𝓯𝓻𝓲𝓮𝓷𝓭𝓼 𝓲𝓷 𝓰𝓸𝓪</p>
      </CardContent>
      <CardFooter>
        <ToastButton
          label="Copy"
          description="Selected Caption Copied To Clipboard"
          title="Copied"
        />
      </CardFooter>
    </Card>
  );
};

export const ExampleCaptions = () => {
  return (
    <div className="w-[80%] h-96 rounded-md flex flex-col gap-10 overflow-scroll p-10 bg-slate-50">
      <Caption />
      <Caption />
      <Caption />
      <Caption />
      <Caption />
      <Caption />
    </div>
  );
};
