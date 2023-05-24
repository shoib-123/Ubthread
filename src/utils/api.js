import axios from "axios";
import { generateRandomNumber } from "./globalFunctions";
import store from "../redux/store";
import { saveOtp } from "../redux/slices/otpSlice";

// const getOTP = async () => {
//   const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

//   const otp = generateRandomNumber();

//   store.dispatch(saveOtp(otp));

//   const token =
//     "qg8UQuXEnhfxvAz2RTi7o6K4MDyaVpCOrWHd1mIeSFcYtZ9k3jfExbuF6amdD4B8CTGPZUresOH51i0o";
//   const data = {
//     message: otp,
//     language: "english",
//     route: "q",
//     numbers: store.getState().input["mobileNumber"],
//   };

//   try {
//     const response = await axios.post(apiUrl, data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log(response.data); // Handle the response data
//   } catch (error) {
//     console.error(error); // Handle the error
//   }
// };

const getOTP = () => {
  const otp = generateRandomNumber();

  store.dispatch(saveOtp(otp));
};

export { getOTP };
