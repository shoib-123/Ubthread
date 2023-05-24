import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {},
  reducers: {
    errorState(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export default errorSlice.reducer;

export const { errorState } = errorSlice.actions;
