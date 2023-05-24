import React, { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.4rem;
  color: #4b4e70;
  line-height: 180%;
  width: 70%;
`;

const HeadingText = styled.h3`
  font-weight: 600;
  font-size: 3.2rem;
  background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 4.5rem;
`;

const DescText = styled.p`
  font-size: 1.4rem;
  color: #4b4e70;
  line-height: 150%;
  width: 70%;
`;

export default function HeadingWithDesc(props) {
  const { children, headingText } = props;

  return (
    <Container>
      <HeadingText>{headingText}</HeadingText>
      <DescText>{children}</DescText>
    </Container>
  );
}
