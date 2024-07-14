import { setSelectedLanguages } from "@/Store/actionSelectPreference";
import {
  DialogProps,
  PreferenceDialog,
} from "@/components/Dialog/PreferenceDialog";
import { DialogType } from "@/constants/enum";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Language = () => {
  const [mounted, setMounted] = React.useState(false);
  const selectedOptions = useSelector((state) => state.selectedLanguages);
  const dispatch = useDispatch();
  const [languageChosen, setLocalSelectedLanguage] = useState([]);
  const handleLanguageSelect = (preferredLanguage: string) => {
    if (languageChosen.includes(preferredLanguage)) {
      setLocalSelectedLanguage(
        languageChosen.filter((lang) => lang !== preferredLanguage),
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
  const props: DialogProps = {
    label: "Language",
    title: "Select your language",
    type: DialogType.Language,
    selectButton: handleSelect,
    resetButton: handleReset,
    preferenceButton: {
      type: DialogType.Language,
      onClick: handleLanguageSelect,
      selectedItems: languageChosen,
    },
  };
  return <PreferenceDialog {...props} />;
};

export default Language;
