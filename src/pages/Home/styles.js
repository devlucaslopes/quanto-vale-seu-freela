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
`;
