import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--grey);
  border-radius: 8px;
  padding: 30px;
`;

export const TodoForm = styled.div`
  margin: 0 0 15px 0;

  & > input[type=text] {
    padding: 10px 20px;
    border: 1px solid var(--grey);
    border-radius: 16px;
    outline: 0;
  }

  & > button {
    padding: 10px 20px;
    border: 1px solid var(--grey);
    margin: 0 0 0 10px;
    outline: 0;
    background-color: #e2e2e2;
    border-radius: 16px;
    cursor: pointer;

    &:hover {
      background-color: #e6e6e6;
    }

    &:active {
      background-color: #e2e2e2;
    }
  }
`;

export const TodoItem = styled.div`
  padding: 4px 0;

  & > label > input[type=checkbox] {
    margin: 0 10px 0 0;
  }
`;