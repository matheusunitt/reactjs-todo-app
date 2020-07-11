import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  & > h1 {
    color: var(--white);
  }
`;
