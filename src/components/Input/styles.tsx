import styled from "styled-components";

export const InputBlock = styled.div`
  & {
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--gap);

      span {
        font-size: 0.75rem;
        font-weight: 400;
        color: red;
      }
    }

    input {
      display: block;
      width: 100%;
      padding: var(--gap);
      border-radius: 0;
      border: 1px solid var(--gray-800);
    }

    input.error {
      border: 1px solid red;
    }
  }
`;
