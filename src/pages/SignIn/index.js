import React, { useState } from "react";
import { AuthCard } from "../../components/organisms";
import { validateFields } from "../../utils/globalFunctions";
import { getOTP } from "../../utils/api";
import { HeadingWithDesc } from "../../components/molecules";
import * as style from "./styles";
import { Logo } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SignIn() {
  const [otpField, setOtpField] = useState(false);

  const navigate = useNavigate();

  const store = useSelector((state) => state);

  console.log("store", store);

  const handleAction = () => {
    if (!otpField) {
      if (validateFields("mobileNumber")) {
        setOtpField(true);
        getOTP();
      }
    } else {
      if (validateFields("mobileNumber", "otp")) {
        navigate("/StoreSetup");
      }
    }
  };

  return (
    <div style={style.wrapperStyles}>
      <div style={style.signInContainer}>
        <img src="/assets/images/signIn.png" style={style.signInImage} />
        <div style={style.contentContainer}>
          <div style={style.textContainer}>
            <HeadingWithDesc headingText="LOGO">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              nulla eget adipiscing faucibus platea. Eu ultrices ipsum
            </HeadingWithDesc>
          </div>
          <AuthCard signIn onButtonClick={handleAction} otpField={otpField} />
        </div>
      </div>
    </div>
  );
}
