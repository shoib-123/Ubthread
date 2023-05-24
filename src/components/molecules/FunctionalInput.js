import React, { useState } from "react";
import styled from "styled-components";
import ActionText from "./ActionText";
import { LinkText } from "../atoms";

const ContainerDiv = styled.div`
  margin-top: ${(props) => props?.containerStyles?.marginTop};
  margin-bottom: ${(props) => props?.containerStyles?.marginBottom};
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props?.contentStyles?.justifyContent || "space-between"};
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 1.5rem 1.3rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #c8d8ff;
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid rgba(150, 171, 222, 0.7);
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.05));
  width: 100%;
  &:focus {
    resize: none;
    outline: none;
    box-shadow: none;
    caret-color: black;
  }
  ::placeholder {
    font-size: 1.4rem;
    color: #4b4e70;
    line-height: 150%;
    font-weight: 400;
  }
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const StaticInput = styled.div`
  padding: 0 1.3rem 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border: none;
  border-bottom: 1px solid rgba(150, 171, 222, 0.7);
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.05));
  box-sizing: border-box;
  margin-bottom: 1rem;
  margin-top: 4rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;

const InfoDiv = styled.div``;

const DescText = styled.p`
  font-size: 1.4rem;
  color: #4b4e70;
  line-height: 150%;
  width: 70%;
`;

const WebsiteName = styled.h4`
  font-size: 1.6rem;
  color: rgb(200, 216, 255);
  line-height: 150%;
  font-weight: 400;
  margin-left: 2 rem;
`;

const MoreText = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: #658ded;
`;

const DomainText = styled.p`
  font-size: 1.4rem;
  color: #4b4e70;
  line-height: 150%;
  width: 70%;
  text-align: right;
`;

export default function FunctionalInput(props) {
  const {
    src,
    plainText,
    linkText,
    actionPlainText,
    actionLinkText,
    descText,
    containerStyles,
    onChange,
    setFocusStoreName,
    setStoreName,
  } = props;

  const [domainName, setDomainName] = useState();

  const [domainField, showDomainField] = useState(false);

  const onFocus = () => {
    setFocusStoreName(true);
  };

  const onBlur = (e) => {
    setDomainName(e.target.value);
    showDomainField(true);
    setStoreName(e.target.value);
    setFocusStoreName(false);
  };

  return (
    <ContainerDiv containerStyles={containerStyles}>
      <StyledInput
        placeholder="Ex. Ginny Cake Shop"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <ContentDiv contentStyles={{ justifyContent: "flex-end" }}>
        <div>
          <ActionText
            plainText="Not sure about the name"
            linkText="Want us to suggest?"
          />
        </div>
        {/* <ActionText plainText={actionPlainText} linkText={actionLinkText} /> */}
      </ContentDiv>

      {domainField && (
        <>
          <StaticInput>
            <StyledDiv>
              <img src={src} alt="SVG Image" />
              <WebsiteName>{domainName}</WebsiteName>
            </StyledDiv>
            <DomainText>{plainText}</DomainText>
          </StaticInput>
          <ContentDiv>
            <InfoDiv>
              <DescText>
                {descText}&nbsp;<MoreText>Learn More</MoreText>
              </DescText>
            </InfoDiv>
            <LinkText>{linkText}</LinkText>
          </ContentDiv>
        </>
      )}
    </ContainerDiv>
  );
}
