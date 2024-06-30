"use client";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export function ToastButton({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label: string;
}) {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: title,
          description: description,
        });
      }}
    >
      {label}
    </Button>
  );
}
