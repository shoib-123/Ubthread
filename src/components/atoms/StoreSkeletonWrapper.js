import React from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
  padding: 2rem 2rem 0;
  display: grid;
`;

const InnerWrapper = styled.div`
  background-color: transparent;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
  border-radius: 0.6rem;
  padding: 2rem 2rem 0;
  border-bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr 0.9fr;
  gap: 2rem;
  transition: scale 1s;
  transform-origin: 0 0;
`;

export default function StoreSkeletonWrapper(props) {
  const { children } = props;

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}
