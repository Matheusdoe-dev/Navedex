import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
        line-height: 1.15em;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1rem;
    }

    a,
    button,
    input,
    span,
    label {
        font-size: .875rem;
    }

    p,
    input::placeholder {
        font-size: 1rem;
        font-weight: 400;
    }

    p {
        line-height: 1.5em;
        max-width: 30em;
    }

    a,
    button,
    input,
    span {
        line-height: 1em;
    }

    a,
    button,
    input,
    label {
        font-weight: 600;
    }
`;

export default Elements;
