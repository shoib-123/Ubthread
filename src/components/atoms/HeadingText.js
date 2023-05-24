import React from "react";
import styled from "styled-components";

const Text = styled.h4`
  font-size: 1.7rem;
  font-weight: 600;
  color: #c8d8ff;
  text-fill-color: transparent;
  text-align: ${(props) => props?.headingTextStyles?.textAlign};
`;

export default function HeadingText(props) {
  const { children, headingTextStyles } = props;

  return <Text headingTextStyles={headingTextStyles}>{children}</Text>;
}
