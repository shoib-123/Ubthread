import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  MultilineText,
  PlainText,
  AuthButton,
} from "../../atoms";
import {
  ActionText,
  HeadingActionText,
  LabeledInput,
  LabeledDropdownInput,
} from "../../molecules";
import * as styles from "./styles";
import { getOtp, oAuth } from "../../../utils/globalFunctions";
import { useNavigate } from "react-router-dom";

export default function AuthCard(props) {
  const { signIn, onClick, otpField, signUp, onButtonClick } = props;

  const [resend, setResend] = useState(true);
  const [otpTimer, setTimer] = useState(5);
  let interval;

  const [resendText, setResendText] = useState("Resend in");

  const navigate = useNavigate();

  useEffect(() => {
    if (otpField) {
      interval = setInterval(() => {
        setTimer((prevCount) => {
          if (prevCount <= 0) {
            clearInterval(interval);
            return 0;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [otpField, otpTimer]);

  useEffect(() => {
    if (otpTimer == 0) {
      setResendText("Resend");
    }
  }, [otpTimer]);

  const handleResend = () => {
    if (otpTimer == 0) {
      setResend(false);
      setTimer(false);
      getOtp();
    }
  };

  const handleNavigate = () => {
    if (signIn) {
      navigate("/");
    } else if (signUp) {
      navigate("/SignIn");
    }
  };

  return (
    <Card>
      <HeadingActionText
        headingText={signUp ? "Create store in 10mins" : "Get Started !"}
        plainText={signUp ? "Already have a account?" : "New to Company?"}
        linkText={signUp ? "Sign In" : "Sign Up"}
        onClick={handleNavigate}
      />
      <div style={styles?.inputContainer}>
        {signUp && (
          <div style={styles?.fullNameContainer}>
            <LabeledInput
              label="First Name"
              placeholder="Your First Name"
              name="firstName"
            />
            <LabeledInput
              label="Last Name"
              placeholder="Your Last Name"
              name="lastName"
            />
          </div>
        )}
        <LabeledInput
          label="Enter Mobile Number"
          placeholder="Enter Mobile Number"
          name="mobileNumber"
          country={true}
        />
        {otpField && (
          <LabeledInput
            label="Enter OTP"
            placeholder="Enter OTP"
            name="otp"
            otpTimer={otpTimer}
            handleResend={handleResend}
            resend={resend}
          />
        )}
        <Button onButtonClick={onButtonClick}>
          {otpField ? "Verify OTP" : "Send OTP"}
        </Button>
        {signIn && (
          <>
            <span style={styles?.bottomTextStyles}>Or sign in with</span>
            <div style={styles?.authButtonContainer}>
              <AuthButton name="google">
                <img src="/assets/icons/google.svg" />
                Google
              </AuthButton>
              <AuthButton name="facebook">
                <img src="/assets/icons/facebook.svg" />
                Facebook
              </AuthButton>
            </div>
          </>
        )}
        <span style={styles?.bottomTextStyles}>
          By creating an account means you agree to the Terms & Conditions and
          our Privacy Policy
        </span>
      </div>
    </Card>
  );
}
