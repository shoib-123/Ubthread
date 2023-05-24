import React, { useState } from "react";
import * as styles from "./styles";
import { AuthCard } from "../../components/organisms";
import { validateFields, getOtp } from "../../utils/globalFunctions";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [otpField, setOtpField] = useState(false);

  const navigate = useNavigate();

  const handleAction = () => {
    if (!otpField) {
      if (validateFields("firstName", "lastName", "mobileNumber")) {
        setOtpField(true);
        getOtp();
      }
    } else {
      if (validateFields("firstName", "lastName", "mobileNumber", "otp")) {
        navigate("/StoreSetup");
      }
    }
  };

  return (
    <div style={styles.wrapperStyles}>
      <div id="recaptcha-container"></div>
      <div style={styles.signUpContainer}>
        <img
          src="/assets/images/background.png"
          style={styles.backgroundImage}
        />
        <div style={styles.authCardStyles}>
          <AuthCard signUp onButtonClick={handleAction} otpField={otpField} />
        </div>
      </div>
    </div>
  );
}
