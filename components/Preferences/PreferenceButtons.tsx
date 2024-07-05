import React from "react";
import { Button } from "../ui/button";

export const PreferenceButton = ({
  value,
  emoji,
  onClick,
  selected,
}: {
  value: string;
  emoji?: number;
  onClick: (value: string) => void;
  selected: boolean;
}) => {
  console.log(selected);
  const handleClick = () => {
    onClick(value);
  };

  const emojiChar = emoji && String.fromCodePoint(emoji);
  return (
    <Button
      variant={"outline"}
      className={`rounded-3xl text-black font-sans gap-3 ${
        selected && "border-black"
      }`}
      onClick={handleClick}
    >
      {value}
      <span>{emojiChar}</span>
    </Button>
  );
};
export default PreferenceButton;
