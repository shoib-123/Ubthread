import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { inputValues } from "../../redux/slices/atomSlices/inputSlice";
import { errorState } from "../../redux/slices/errorSlice";
import { handleValidate } from "../../utils/globalFunctions";

const StyledInput = styled.input`
  /* CSS styles for the input */
  padding: 1.5rem 1.3rem;
  font-size: 1.4rem;
  background-color: transparent !important;
  border: ${(props) =>
    props?.errors ? "0.1rem solid red" : "0.1rem solid #343e50"};
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: white;
  width: 100%;
  &:focus {
    resize: none;
    outline: none;
    box-shadow: none;
    caret-color: white;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: #5c6d8e;
  }
`;

const InputContainer = styled.div`
  width: ${(props) => props?.inputContainerStyles?.width || "100%"};
`;

const ErrorText = styled.p`
  position: absolute;
  color: #cc0000;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0.1 rem;
`;

const Input = (props) => {
  const { inputStyles, inputContainerStyles, placeholder, name } = props;
  const dispatch = useDispatch();
  const errors = useSelector((state) => state?.errors);

  const onBlur = (e) => {
    dispatch(inputValues({ [e.target.name]: e.target.value }));
    dispatch(errorState({ [e.target.name]: handleValidate(e.target.name) }));
  };

  return (
    <InputContainer inputContainerStyles={inputContainerStyles}>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onBlur={onBlur}
        name={name}
        maxLength={10}
        errors={errors[name]}
      />
      <ErrorText>{errors[name]}</ErrorText>
    </InputContainer>
  );
};

export default Input;
