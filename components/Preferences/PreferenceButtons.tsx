import React from "react";
import { Button } from "../ui/button";

export const PreferenceButton = ({
  value,
  onClick,
  selected,
}: {
  value: string;
  onClick: (value: string) => void;
  selected: boolean;
}) => {
  console.log(selected);
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Button
      variant={"outline"}
      className={`rounded-3xl text-black font-sans gap-3 ${
        selected && "border-black"
      }`}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
};
export default PreferenceButton;
