import { createGlobalStyle } from "styled-components";

const Animations = createGlobalStyle`
    @keyframes fade-in {
        from {
        transform: translateY(-20px);
        opacity: 0;
        }

        to {
        transform: translateY(0px);
        opacity: 1;
        }
  }
`;

export default Animations;
