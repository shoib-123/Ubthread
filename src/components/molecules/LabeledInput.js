import React from "react";
import styled from "styled-components";
import ActionText from "./ActionText";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inputValues } from "../../redux/slices/atomSlices/inputSlice";

const InputContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const LabelText = styled.label`
  line-height: 2rem;
  color: #c8d8ff;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputField = styled.input`
  padding: 1.5rem 1.3rem;
  font-size: 1.4rem;
  background-color: transparent !important;
  border: 1px solid #343e50;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
  border-radius: 0.4rem;
  flex: 1;
  color: #fff;
  ::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: #5c6d8e;
  }

  &:focus,
  &:-internal-autofill-selected {
    /* Styles for focus and autofill */
    /* Add specific styles if needed */
  }
`;

const Text = styled.span`
  color: ${(props) => props?.color};
  font-size: 1.2rem;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justifycontent: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  background-color: transparent;
  border: 1px solid #343e50;
  padding: 1.5rem 1.3rem;
  border-radius: 0.4rem;
`;

export default function LabeledInput(props) {
  const {
    errorText,
    label,
    placeholder,
    name,
    otpTimer,
    handleResend,
    resend,
    country,
  } = props;

  const dispatch = useDispatch();

  const errors = useSelector((state) => state?.errors);
  const input = useSelector((state) => state);

  const onBlur = (e) => {
    dispatch(inputValues({ [name]: e.target.value }));
  };

  return (
    <InputContainer>
      <LabelText>{label}</LabelText>
      <InputWrapper>
        {country && (
          <SelectDiv>
            <img
              src="/assets/images/india.png"
              style={{
                backgroundColor: "transparent",
              }}
            />
          </SelectDiv>
        )}
        <InputField placeholder={placeholder} onBlur={onBlur} />
      </InputWrapper>
      {name == "otp" && resend && (
        <span>
          <ActionText
            plainText="Haven't recieved any code?"
            linkText="Resend"
            textStyles={{ textAlign: "left" }}
            onClick={handleResend}
          />{" "}
          &nbsp;<Text color="#5c74a3">{` in ${otpTimer}`}</Text>
        </span>
      )}
      {/* {helperText && <span className={styles.helperText}>{helperText}</span>} */}
      {errors && errors[name] && <Text color="#bd6969">{errors[name]}</Text>}
    </InputContainer>
  );
}
