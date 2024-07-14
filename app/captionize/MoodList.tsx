import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMoodOptions } from "./../../Store/actionSelectPreference";
import {
  DialogProps,
  PreferenceDialog,
} from "@/components/Dialog/PreferenceDialog";
import { DialogType } from "@/constants/enum";
import { Dialog_Strings } from "@/constants/strings";

export const MoodList = () => {
  const [mounted, setMounted] = useState(false);
  const [localSelectedMoodOptions, setLocalSelectedMoodOptions] = useState<
    string[]
  >([]);
  const selectedOptions = useSelector((state) => state.selectedMoodOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    setLocalSelectedMoodOptions(selectedOptions); // Initialize local state with Redux state
  }, [selectedOptions]);

  const handleSelectedMoodOptions = (moodValue: string) => {
    if (localSelectedMoodOptions?.includes(moodValue)) {
      setLocalSelectedMoodOptions(
        localSelectedMoodOptions.filter((item) => item !== moodValue)
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
  const props: DialogProps = {
    label: Dialog_Strings.MoodDialogLabel,
    title: Dialog_Strings.MoodDialogTitle,
    type: DialogType.Mood,
    selectButton: handleSelect,
    resetButton: handleReset,
    preferenceButton: {
      type: DialogType.Mood,
      onClick: handleSelectedMoodOptions,
      selectedItems: localSelectedMoodOptions,
    },
  };
  return <PreferenceDialog {...props} />;
};
