import styled from "styled-components";

export const Container = styled.div`
  & {
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    place-content: center;

    @media (max-width: 1300px) {
      width: 80%;
    }
  }
`;
