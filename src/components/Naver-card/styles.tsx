import styled from "styled-components";

export const Buttons = styled.div`
  & {
    display: flex;
    justify-content: flex-start;

    button,
    a {
      background: 0;
      border: 0;

      :first-child {
        margin-right: var(--gap-sm);
      }
    }
  }
`;

export const NaverContainer = styled.div`
  & {
    img,
    p {
      margin-bottom: var(--gap-sm);
    }

    h3 {
      margin-bottom: var(--gap);
    }
  }
`;

export const NaverInfo = styled.div`
  & {
    cursor: pointer;

    img {
      height: 280px;
    }
  }
`;
