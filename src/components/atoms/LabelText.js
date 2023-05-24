import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: #c8d8ff;
  margin-bottom: ${(props) => props?.labelStyles?.marginBottom};
`;

export default function LabelText(props) {
  const { children, labelStyles } = props;

  return <Text labelStyles={labelStyles}>{children}</Text>;
}
