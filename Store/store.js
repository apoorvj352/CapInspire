// store.js
import { createStore } from "redux";

const initialState = {
  selectedMoodOptions: [],
  selectedLanguages: [],
  generatedCaptions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_MOOD_OPTIONS":
      return {
        ...state,
        selectedMoodOptions: action.payload,
      };
    case "SET_SELECTED_LANGUAGES":
      return {
        ...state,
        selectedLanguages: action.payload,
      };
    case "SET_CAPTIONS":
      return {
        ...state,
        generatedCaptions: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
