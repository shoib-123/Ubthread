import store from "../redux/store";
import { inputValues } from "../redux/slices/atomSlices/inputSlice";
import { errorState } from "../redux/slices/errorSlice";
import { buttonEnabled } from "../redux/slices/atomSlices/buttonSlice";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase.config";
// import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter();

const validateFields = (...props) => {
  let error = {};
  let noErrors = false;

  for (let i = 0; i < props.length; i++) {
    error = { ...error, [props[i]]: handleValidate(props[i]) };
  }

  if (areAllValuesNull(error)) {
    noErrors = true;
    store?.dispatch(errorState({ ...error }));
  } else {
    store?.dispatch(errorState({ ...error }));
  }

  return noErrors;
};

function areAllValuesNull(obj) {
  for (let key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}

const otpGenerated = store?.getState()?.otp?.otp;
const otpEntered = store?.getState()?.input?.otp;

const handleValidate = (field) => {
  let inputObject = store?.getState()?.input;

  switch (field) {
    case "firstName":
    case "lastName":
      if (!inputObject[field]) {
        return "This field cant be empty !";
      } else {
        return null;
      }
    case "mobileNumber":
      if (!inputObject["mobileNumber"]) {
        return "This field cant be empty !";
      } else {
        if (!validateMobile(+inputObject["mobileNumber"])) {
          return "Invalid mobile number !";
        } else {
          return null;
        }
      }
    case "otp":
      if (!inputObject["otp"]) {
        return "This field cant be empty !";
      } else {
        if (otpGenerated == otpEntered) {
          return null;
        } else {
          return "Invalid otp !";
        }
      }
    default:
      console.log("Default case");
  }
};

const validateMobile = (number) => {
  let regex = /^[0-9]{10}$/;
  if (regex.test(number)) {
    return true;
  } else {
    return false;
  }
};

function onCaptchVerify() {
  try {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            getOtp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function getOtp() {
  store.dispatch(buttonEnabled({ enabled: false }));
  onCaptchVerify();
  const appVerifier = window.recaptchaVerifier;
  const formatPh = "+91" + store?.getState().input["mobileNumber"];
  signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      store.dispatch(buttonEnabled({ enabled: true }));
      // toast.success("OTP sended successfully!");
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(buttonEnabled({ enabled: true }));
    });
}

function onOTPVerify() {
  const otp = store?.getState()?.input?.otp;
  window.confirmationResult
    .confirm(otp)
    .then(async (res) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

let googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      window.location.assign("/StoreSetup");
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {})
    .catch((error) => {
      window.location.assign("/StoreSetup");
    });
};

function oAuth(provider) {
  switch (provider) {
    case "google":
      signInWithGoogle();
      break;
    case "facebook":
      signInWithFacebook();
      break;
    default:
      console.log("Invalid input");
  }
}

function generateRandomNumber() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return randomNumber.toString();
}

export { validateFields, handleValidate, getOtp, oAuth, generateRandomNumber };
