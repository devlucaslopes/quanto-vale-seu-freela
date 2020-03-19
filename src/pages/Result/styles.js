import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  > h1 {
    margin-bottom: 1rem;
  }

  > p {
    line-height: 1.5rem;
  }

  > p > span {
    color: #9b51e0;
    font-weight: bold;
  }

  p:nth-child(4) {
    font-style: italic;
  }
`;

export const Actions = styled.div`
  margin-top: 1rem;
`;
