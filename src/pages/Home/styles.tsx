import styled from "styled-components";
import { Container } from "../../styles/objects/grid";

export const HomeContainer = styled(Container)`
  & {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeHeader = styled.section`
  & {
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(var(--gap) * 5);
  }
`;

export const Navers = styled.section`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: var(--gap-md);
    row-gap: var(--gap-md);
  }
`;
