import React from "react";
// import ActionText from "./ActionText";
// import HeadingText from "../atoms/HeadingText";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  gap: 1rem;
`;

const HeadingText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #c8d8ff;
`;

const Span = styled.span`
  font-size: 1.6rem;
  text-align: center;
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
  cursor: pointer;
`;

export default function HeadingActionText(props) {
  const { plainText, linkText, headingText, onClick } = props;

  return (
    <StyledDiv>
      <HeadingText>{headingText}</HeadingText>
      <Span>
        {plainText} &nbsp;<AnchorText onClick={onClick}>{linkText}</AnchorText>
      </Span>
    </StyledDiv>
  );
}
