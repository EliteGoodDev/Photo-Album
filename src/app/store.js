// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tabSlice";
import bookReducer from "../features/bookSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
    book: bookReducer,
  },
});

export default store;
