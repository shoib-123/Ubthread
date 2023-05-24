import { configureStore } from "@reduxjs/toolkit";
import {
  errorSlice,
  inputSlice,
  buttonSlice,
  mainCardSlice,
  otpSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    errors: errorSlice,
    input: inputSlice,
    button: buttonSlice,
    mainCard: mainCardSlice,
    otp: otpSlice,
  },
});

export default store;
