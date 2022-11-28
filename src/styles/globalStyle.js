import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat, sans-serif";
}

ul {
  list-style: none;
}
a{
  text-decoration: none;
}

:root{
  --white:#FFFFFF;
  --black:#000000;
  --bg-white:#F2F2F2;
  --gray:#787878;
  --orange:#FD8C11;
  --orange-dark:#F1662A;
  --blue-light:#4E96AA;
  --blue:#02485A;
  --blue-dark:#02485A;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 7rem;
  padding-right: 7rem;
}
`;
