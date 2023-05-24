import React from "react";
import styled from "styled-components";

const LogoText = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  text-transform: uppercase;
  background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default function Logo() {
  return <LogoText>LOGO</LogoText>;
}
