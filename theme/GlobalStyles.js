import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html, body, h1, h2, h3, h4, p, ul, li, figure, label, main {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

* {
    box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

html, body {
    width: 100%;
    font-family: GillSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

`;
