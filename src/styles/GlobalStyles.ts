import { createGlobalStyle } from "styled-components";
import { genericReset } from "./reset.styles";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin: 0;
    padding: 0;
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    min-width: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }
  body {
    background-color: ${(props) => props.theme.colors.body};
  }
`;
