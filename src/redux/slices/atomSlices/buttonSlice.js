import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "error",
  initialState: {
    enabled: true,
  },
  reducers: {
    buttonEnabled(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export default buttonSlice.reducer;

export const { buttonEnabled } = buttonSlice.actions;
