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
  --orange-light: rgba(253, 140, 17, 0.5);
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


.btn {
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: 16px;
    background-color: var(--orange);
    padding: 10px 20px;
    border-radius: 5px;
    color: var(--white);
    transition: 0.2s all ease-in;
    cursor: pointer;
    border: 0;

    &:hover {
      background: var(--orange-dark);
    }
  }

`;
