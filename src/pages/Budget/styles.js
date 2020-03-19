import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  > h1 > span {
    color: #9b51e0;
  }

  > p {
    margin: 1rem 0;
    line-height: 1.5rem;
  }

  > form {
    margin-top: 3rem;
  }
`;

export const InputGroup = styled.div`
  margin: 1rem 0;

  > label {
    color: #889bb0;
  }

  > input {
    margin-top: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    color: #889bb0;

    &::placeholder {
      color: #889bb0;
    }
  }
`;
