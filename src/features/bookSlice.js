// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { paper: 0 },
  reducers: {
    setPaper: (state, action) => {
      state.paper = action.payload.paper;
    },
  },
});

export const { setPaper } = bookSlice.actions;
export default bookSlice.reducer;
