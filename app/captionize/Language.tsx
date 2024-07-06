import PreferenceButton from "@/components/Preferences/PreferenceButtons";
import { Mountain } from "lucide-react";
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

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setSelectedLanguages } from "@/Store/actionSelectPreference";
export const Language = () => {
  const [mounted, setMounted] = React.useState(false);
  const selectedOptions = useSelector((state) => state.selectedLanguages);
  const dispatch = useDispatch();
  const [languageChosen, setLocalSelectedLanguage] = useState([]);
  const handleLanguageSelect = (preferredLanguage: string) => {
    if (languageChosen.includes(preferredLanguage)) {
      setLocalSelectedLanguage(
        languageChosen.filter((lang) => lang !== preferredLanguage)
      );
    } else {
      setLocalSelectedLanguage([...languageChosen, preferredLanguage]);
    }
  };
  useEffect(() => {
    setMounted(true);
    setLocalSelectedLanguage(selectedOptions); // Initialize local state with Redux state
  }, [selectedOptions]);
  const handleSelect = () => {
    dispatch(setSelectedLanguages(languageChosen));
  };
  const handleReset = () => {
    setLocalSelectedLanguage([]); // Reset localSelectedOptions
  };
  if (!mounted) {
    return null;
  }
  const languageList = [
    "English",
    "Hindi",
    "Marathi",
    "Gujrati",
    "Tamil",
    "Telegu",
    "Punjabi",
    "Kannada ಎ",
    "Bengali",
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant={"outline"}
          className="rounded-3xl bg-white text-black font-sans gap-2"
        >
          Language{" "}
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
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="relative">
            How are you feeling .....
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-wrap gap-4 justify-center">
              {languageList.map((language, index) => (
                <PreferenceButton
                  value={language}
                  onClick={handleLanguageSelect}
                  selected={languageChosen.includes(language)}
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

export default Language;
