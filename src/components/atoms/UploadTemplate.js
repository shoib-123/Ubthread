import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444261;
  box-sizing: border-box;
`;

export default function UploadTemplate(props) {
  const { src, containerStyles } = props;
  return (
    <StyledDiv containerStyles={containerStyles}>
      <img src={src} />
    </StyledDiv>
  );
}
