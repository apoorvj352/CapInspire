// actions.js
export const setSelectedMoodOptions = (options) => ({
  type: "SET_SELECTED_MOOD_OPTIONS",
  payload: options,
});
export const setSelectedLanguages = (options) => ({
  type: "SET_SELECTED_LANGUAGES",
  payload: options,
});
export const setGeneratedCaptions = (captions) => ({
  type: "SET_CAPTIONS",
  payload: captions,
});
