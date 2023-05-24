import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.4rem;
  color: #4b4e70;
  line-height: 150%;
  width: 70%;
  text-align: right;
`;

export default function PlainText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
}
