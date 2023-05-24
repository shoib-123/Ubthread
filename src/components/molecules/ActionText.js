import React from "react";
import styled from "styled-components";

const Span = styled.span`
  font-size: 1.4rem;
  text-align: ${(props) => props?.textStyles?.textAlign || "center"};
  color: #5c74a3;
`;

const AnchorText = styled.a`
  background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
`;

export default function ActionText(props) {
  const { plainText, linkText, textStyles, onClick } = props;

  return (
    <Span textStyles={textStyles}>
      {plainText} &nbsp;<AnchorText onClick={onClick}>{linkText}</AnchorText>
    </Span>
  );
}
