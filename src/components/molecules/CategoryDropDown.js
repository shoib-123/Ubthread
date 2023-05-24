import React, { useState, useId } from "react";
import styled from "styled-components";
import Select from "react-select";

const StaticDiv = styled.div`
  position: relative;
  background-color: red;
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid rgba(150, 171, 222, 0.7);
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.05));
  box-sizing: border-box;
`;

const options = [
  {
    value: 1,
    label: "Jewellry",
  },
  {
    value: 2,
    label: "Accessories",
  },
  {
    value: 3,
    label: "Phone",
  },
];

const DropDownIcon = styled.img`
  position: absolute;
  right: 0;
  top: 25%;
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none", // Remove the border
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    backgroundColor: "transparent", // Remove box shadow when not focused
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Hide the dropdown indicator
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#C8D8FF" : "black",
  }),
};

export default function CategoryDropDown(props) {
  const { selectedText, containerStyles } = props;
  const [show, setShow] = useState(false);

  const handleDropdown = () => {
    setShow(!show);
  };

  return (
    <StaticDiv>
      <DropDownIcon src="/assets/icons/dropdown.svg" alt="SVG Image" />
      <Select
        instanceId={useId()}
        placeholder="Services"
        styles={customStyles}
        options={options}
      />
    </StaticDiv>
  );
}

/**
 * 
 *   <StaticDiv onClick={handleDropdown} containerStyles={containerStyles}>
        <Text>{selectedText}</Text>
        <img src="/assets/icons/dropdown.svg" alt="SVG Image" />
      </StaticDiv>
      <Select
        instanceId={useId()}
        placeholder="Services"
        styles={customStyles}
        options={options}
      />
 */
