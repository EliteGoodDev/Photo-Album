// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { paper: 0, color: "#fff", images: [], texts: [], layouts: [] },
  reducers: {
    setPaper: (state, action) => {
      state.paper = action.payload.paper;
    },
    setColor: (state, action) => {
      state.color = action.payload.color;
    },
    setImages: (state, action) => {
      state.color = [...action.payload.images];
    },
    setTexts: (state, action) => {
      state.color = [...action.payload.texts];
    },
    setLayouts: (state, action) => {
      state.color = action.payload.layouts;
    },
  },
});

export const { setPaper } = bookSlice.actions;
export default bookSlice.reducer;
