import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DialogType } from "@/constants/enum";
import { languageList, mood, moodEmoji } from "@/constants/list";
import PreferenceButton from "../Preferences/PreferenceButtons";
import React, { useState, useRef, useEffect } from "react";

export type DialogProps = {
  label: string;
  title: string;
  type: DialogType;
  preferenceButton: PreferenceButtonProps;
  selectButton: () => void;
  resetButton: () => void;
};
export type PreferenceButtonProps = {
  type: DialogType;
  onClick: (value: string) => void;
  selectedItems: string[];
};
export type TriggerButtonProps = {
  label: string;
  type: DialogType;
};
export const PreferenceIcon = ({ type }: { type: DialogType }) => {
  switch (type) {
    case DialogType.Language:
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
        </span>
      );
    case DialogType.Mood:
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </span>
      );
  }
};
function fetchListItems(type: DialogType): string[] {
  let listItems = type === DialogType.Mood ? [...mood] : [...languageList];
  const emojis = type === DialogType.Mood ? [...moodEmoji] : [];

  // Modify listItems to include emojis
  listItems = listItems.map((item, index) => {
    const emoji = emojis[index];
    const emojiChar = emoji ? String.fromCodePoint(emoji) : "";
    return item + emojiChar;
  });

  return listItems;
}
export const DialogDescription: React.FC<PreferenceButtonProps> = (
  props: PreferenceButtonProps,
) => {
  const listItems = fetchListItems(props.type);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {listItems?.map((item, index) => (
        <PreferenceButton
          key={index}
          value={item}
          onClick={(item) => props.onClick(item)}
          selected={props.selectedItems?.includes(item)}
        />
      ))}
    </div>
  );
};
export const DialogTriggerButton: React.FC<TriggerButtonProps> = ({
  label,
  type,
}) => {
  return (
    <Button
      variant={"outline"}
      className="rounded-3xl bg-white text-black font-sans gap-2"
    >
      {label}
      <PreferenceIcon type={type} />
    </Button>
  );
};
export const PreferenceDialog: React.FC<DialogProps> = (props: DialogProps) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const preferenceButton = props.preferenceButton;
  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger>
        <DialogTriggerButton label={props.label} type={props.type} />
      </AlertDialogTrigger>
      <AlertDialogContent ref={dialogRef}>
        <AlertDialogHeader>
          <AlertDialogTitle className="relative">
            {props.title}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <DialogDescription
              type={props.type}
              onClick={preferenceButton.onClick}
              selectedItems={preferenceButton.selectedItems}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => {
              e.preventDefault();
              props.resetButton();
            }}
          >
            Reset
          </AlertDialogCancel>
          <AlertDialogAction onClick={props.selectButton}>
            Select
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
