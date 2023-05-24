import React from "react";
import {
  FunctionalInput,
  HeadingWithDesc,
  CategoryDropDown,
} from "../../molecules";
import * as styles from "./styles";
import { Button, HeadingText, PlainText } from "../../atoms";
import { setPage } from "../../../redux/slices/atomSlices/mainCardSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ConfigurationCard(props) {
  const {
    setStoreName,
    totalPages,
    headingText,
    descText,
    functionalInput,
    categoryDropdown,
    setFocusStoreName,
  } = props;
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state?.mainCard?.pageNumber);

  const handleBack = () => {
    if (pageNumber !== 0) {
      dispatch(setPage(pageNumber - 1));
    }
  };

  const handleForward = () => {
    if (pageNumber < totalPages) {
      dispatch(setPage(pageNumber + 1));
    }
  };
  const handleChange = (e) => {
    setStoreName(e.target.value);
  };

  return (
    <div
      style={{
        paddingTop: "12.8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxSizing: "border-box",
        maxHeight: "inherit",
        maxWidth: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          boxSizing: "border-box",
          boxSizing: "border-box",
          maxHeight: "inherit",
          maxWidth: "inherit",
        }}
      >
        <HeadingText headingTextStyles={styles?.headingTextStyles}>
          {pageNumber + 1} &nbsp;
        </HeadingText>
        <PlainText>/ &nbsp;</PlainText>
        <PlainText>{totalPages + 1}</PlainText>
      </div>
      <HeadingWithDesc
        headingText={headingText}
        containerStyles={styles?.headingContainer}
      >
        {descText}
      </HeadingWithDesc>
      {/* <FunctionalInput
        actionPlainText="Not sure about the name,"
        actionLinkText="Want us to suggest?"
        onChange={handleChange}
      /> */}
      {functionalInput && (
        <FunctionalInput
          src={"/assets/icons/check.svg"}
          plainText=".company.com"
          linkText="Generate unique domain"
          actionPlainText="Not sure about the name,"
          actionLinkText="Want us to suggest?"
          descText="This is temporary domain, you can add custom domain in settings"
          containerStyles={styles?.staticInputContainer}
          staticText="Superthread"
          onChange={handleChange}
          setFocusStoreName={setFocusStoreName}
        />
      )}
      {categoryDropdown && (
        <CategoryDropDown
          selectedText="Services"
          containerStyles={styles?.staticInputContainer}
        />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "17rem",
        }}
      >
        <img src="/assets/icons/back.svg" onClick={handleBack} />
        <Button
          buttonStyles={{ width: "auto", padding: "1.5rem 3rem" }}
          onClick={handleForward}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
