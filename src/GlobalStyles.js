import { createGlobalStyle } from "styled-components";
import MyCustomFont from "../src/assets/fonts/SF-Pro.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url(${MyCustomFont}) format('truetype');
  }

  body {
    font-family: 'MyCustomFont', sans-serif;
    box-sizing:border-box
  }
`;

export default GlobalStyles;
