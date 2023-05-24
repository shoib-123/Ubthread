import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: radial-gradient(
      145.46% 122.03% at 88.28% 10.25%,
      rgba(222, 164, 242, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(
      93.02% 80.9% at 22.44% 86.73%,
      rgba(110, 111, 248, 0.1) 0%,
      rgba(110, 111, 248, 0) 100%
    ),
    linear-gradient(
      131.02deg,
      rgba(104, 108, 248, 0.059) 10.34%,
      rgba(236, 171, 241, 0.059) 90.18%
    ),
    #060519;
  border-radius: 2rem;
  padding: 5.2rem 4.5rem;
  display: grid;
  gap: 5rem;
`;

export default function Card(props) {
  const { children } = props;

  return <StyledDiv>{children}</StyledDiv>;
}
