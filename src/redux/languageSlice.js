import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "fa", // Default to Dari (Farsi)
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "fa" : "en";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
