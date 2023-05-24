import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.5rem 3rem;
  background: linear-gradient(165.69deg, #5961f8 4.49%, #ecabf1 113.71%);
  border-radius: 0.5rem;
  color: #fff;
  text-align: center;
  border: 0;
  cursor: pointer;
`;

export default function Button(props) {
  const { children, onButtonClick } = props;

  return <ButtonDiv onClick={onButtonClick}>{children}</ButtonDiv>;
}
