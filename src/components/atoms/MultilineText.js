import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 150%;
  text-align: center;
  width: 50%;
  margin: auto;
  color: #4b4e70;
`;

export default function MultilineText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
}
