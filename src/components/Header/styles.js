import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 968px;
  margin: 0 auto;

  > img {
    width: 156px;
    height: auto;
  }

  > ul {
    display: flex;
  }

  > ul > li {
    margin-right: 1rem;
  }

  a {
    color: #202932;

    &:hover {
      color: #9b51e0;
    }
  }
`;
