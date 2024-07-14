import PreferenceButton from "@/components/Preferences/PreferenceButtons";
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMoodOptions } from "./../../Store/actionSelectPreference";
export const MoodList = () => {
  const [mounted, setMounted] = useState(false);
  const [localSelectedMoodOptions, setLocalSelectedMoodOptions] = useState([]);
  const selectedOptions = useSelector((state) => state.selectedMoodOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    setLocalSelectedMoodOptions(selectedOptions); // Initialize local state with Redux state
  }, [selectedOptions]);

  const mood = [
    "Happy",
    "Confident",
    "Adventurous",
    "Athletic",
    "Nature",
    "Romantic",
    "Mountain",
    "Sad",
    "Disturbed",
    "Angry",
  ];
  const emoji = [
    128578, 128526, 129336, 127939, 127793, 128525, 128507, 128577, 128534,
    128545,
  ];

  const handleSelectedMoodOptions = (moodValue: string) => {
    if (localSelectedMoodOptions?.includes(moodValue)) {
      setLocalSelectedMoodOptions(
        localSelectedMoodOptions.filter((item) => item !== moodValue),
      );
    } else {
      setLocalSelectedMoodOptions([...localSelectedMoodOptions, moodValue]);
    }
  };

  const handleSelect = () => {
    dispatch(setSelectedMoodOptions(localSelectedMoodOptions));
  };
  const handleReset = () => {
    setLocalSelectedMoodOptions([]); // Reset localSelectedOptions
  };

  if (!mounted) {
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant={"outline"}
          className="rounded-3xl bg-white text-black font-sans gap-2"
        >
          Select Your Mood{" "}
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
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="relative">
            How are you feeling .....
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-wrap gap-4 justify-center">
              {mood.map((moodValue, index) => (
                <PreferenceButton
                  key={index}
                  value={moodValue}
                  emoji={emoji[index]}
                  onClick={handleSelectedMoodOptions}
                  selected={localSelectedMoodOptions?.includes(moodValue)}
                />
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleReset}>Reset</AlertDialogCancel>
          <AlertDialogAction onClick={handleSelect}>Select</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
