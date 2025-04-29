// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import languageReducer from "./languageSlice"; // Import the language reducer

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    language: languageReducer, // Add the language reducer to the store
  },
});

export default store;
