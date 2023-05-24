import React, { useState } from "react";
import {
  CategoryDropDown,
  HeadingWithDesc,
  FunctionalInput,
} from "../../components/molecules";
import * as style from "./styles";
import { HeadingText, MainCard } from "../../components/atoms";
import { Button } from "../../components/atoms";
import StoreSkelton from "../../components/organisms/StoreSkeleton";
import ConfigurationCard from "../../components/organisms/ConfigurationCard";
import { setPage } from "../../redux/slices/atomSlices/mainCardSlice";
import { useSelector, useDispatch } from "react-redux";

export default function StoreSetup() {
  const [focusStoreName, setFocusStoreName] = useState(false);

  const [storeName, setStoreName] = useState("Store Name");

  const pageNumber = useSelector((state) => state?.mainCard?.pageNumber);

  let totalPages = 2;

  const dispatch = useDispatch();

  const handleBack = () => {
    if (pageNumber !== 1) {
      dispatch(setPage(pageNumber - 1));
    }
  };

  const handleForward = () => {
    console.log("I ran");
    if (pageNumber < totalPages) {
      dispatch(setPage(pageNumber + 1));
    }
  };

  const handleChange = (e) => {
    setStoreName(e.target.value);
  };

  const headingAndDescription = [
    {
      headingText: "Name your Store",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum",
    },
    {
      headingText: "Select Industry",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum",
    },
  ];

  return (
    <div style={style?.wrapperContainer}>
      <MainCard>
        <div style={style?.innerContainer}>
          <div style={style?.contentContainer}>
            <span>
              <span>0{pageNumber}</span>&nbsp;/ &nbsp;0{totalPages}
            </span>
            {}
            <HeadingWithDesc
              headingText={headingAndDescription[pageNumber - 1].headingText}
            >
              {headingAndDescription[pageNumber - 1].desc}
            </HeadingWithDesc>
            {pageNumber == 1 ? (
              <FunctionalInput
                src={"/assets/icons/check.svg"}
                plainText=".company.com"
                linkText="Generate unique domain"
                actionPlainText="Not sure about the name,"
                actionLinkText="Want us to suggest?"
                descText="This is temporary domain, you can add custom domain in settings"
                // containerStyles={styles?.staticInputContainer}
                staticText="Superthread"
                setStoreName={setStoreName}
                onChange={handleChange}
                setFocusStoreName={setFocusStoreName}
              />
            ) : (
              <CategoryDropDown />
            )}
          </div>
          <div style={style?.buttonContainer}>
            <button style={style?.backButton} onClick={handleBack}>
              <img src="/assets/icons/back.svg" />
            </button>
            <Button onButtonClick={handleForward}>Next</Button>
          </div>
        </div>
        <StoreSkelton storeName={storeName} focusStoreName={focusStoreName} />
      </MainCard>
    </div>
  );
}
