import React from "react";
import styled from "styled-components";
import LabelText from "./LabelText";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #343e50;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
  border-radius: 4px;
  width: 18%;
  padding: 1.3rem;
`;

const ArrowDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
}
`;

const StartDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
}
`;

export default function Dropdown() {
  return (
    <ContainerDiv>
      <StartDiv>
        <img src="/assets/icons/india.svg" alt="SVG Image" />
        <LabelText>+91</LabelText>
      </StartDiv>
      <ArrowDiv>
        <img src="/assets/icons/dropdown.svg" alt="SVG Image" />
      </ArrowDiv>
    </ContainerDiv>
  );
}
