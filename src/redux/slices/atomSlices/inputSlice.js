import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "error",
  initialState: {},
  reducers: {
    inputValues(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export default inputSlice.reducer;

export const { inputValues } = inputSlice.actions;
