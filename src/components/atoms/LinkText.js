import React from "react";
import styled from "styled-components";

const Text = styled.p`
  cursor: pointer;
  font-weight: ${(props) => props?.textStyles?.fontWeight || 600};
  font-size: ${(props) => props?.textStyles?.fontSize || "1.4rem"};
  background-image: linear-gradient(to left, #5961f8, #f2d9f7);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: ${(props) => props?.textStyles?.textAlign};
  margin-bottom: ${(props) => props?.textStyles?.marginBottom};
`;

export default function LinkText(props) {
  const { children, textStyles, onClick } = props;

  return (
    <Text onClick={onClick} textStyles={textStyles}>
      {children}
    </Text>
  );
}
