import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
    :root {
        --gap: 0.5rem;
        --gap-sm: 1rem;
        --gap-md: 2rem;
        --gap-lg: 4rem;
        --gap-xl: 8rem;

    @media (max-width: 960px) {
        & {
            --gap: 0.5rem;
            --gap-sm: 0.5rem;
            --gap-md: 1rem;
            --gap-lg: 2rem;
            --gap-xl: 4rem;
        }
  }
}
`;

export default Gaps;
