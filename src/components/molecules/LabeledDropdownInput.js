import React from "react";
import styled from "styled-components";
import { Dropdown, LabelText, Input } from "../atoms";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props?.componentStyles?.width || "100%"};
  background-color: ${(props) => props?.componentStyles?.backgroundColor};
  white-space: nowrap;
  margin-top: ${(props) => props?.componentStyles?.marginTop || 0};
  margin-bottom: ${(props) => props?.componentStyles?.marginBottom || 0};
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

let labelCommonStyles = {
  marginBottom: "1rem",
};

let containerCommonStyles = {
  width: "76%",
};

export default function LabeledDropdownInput(props) {
  const {
    label,
    componentStyles,
    labelStyles,
    inputContainerStyles,
    placeholder,
    name = { name },
  } = props;

  let combinedStyles = { ...labelStyles, ...labelCommonStyles };

  let combinedContainerStyles = {
    ...inputContainerStyles,
    ...containerCommonStyles,
  };

  return (
    <StyledDiv componentStyles={componentStyles}>
      <LabelText labelStyles={combinedStyles}>{label}</LabelText>
      <InputContainer>
        <Dropdown />
        <Input
          inputContainerStyles={combinedContainerStyles}
          name={name}
          placeholder={placeholder}
        />
      </InputContainer>
    </StyledDiv>
  );
}
