import React from "react";
import styled from "styled-components";
import { oAuth } from "../../utils/globalFunctions";

const Button = styled.button`
  font-size: 1.8rem;
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  text-align: center;
  background: transparent;
  border: 0.5px solid #96abde;
  color: #c8d8ff;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  cursor: pointer;
`;

export default function AuthButton(props) {
  const { children, name } = props;

  return <Button onClick={oAuth.bind(this, name)}>{children}</Button>;
}
