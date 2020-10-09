import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: initial;
    padding: 0.625rem;

    :hover {
        cursor: pointer;
    }
  }
  
  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    color: var(--gray-900);
  
    min-height: 100vh;
  }

  button {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
  }
`;

export default Reset;
