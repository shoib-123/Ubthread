import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    otp: null,
  },
  reducers: {
    saveOtp(state, action) {
      return { ...state, otp: action.payload };
    },
  },
});

export default otpSlice.reducer;

export const { saveOtp } = otpSlice.actions;
