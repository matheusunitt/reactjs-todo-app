import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  .btn {
    padding: 10px 20px;
    border: 1px solid var(--grey);
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

export const TodoList = styled.div`
  border: 1px solid var(--grey);
  border-radius: 8px;
  margin-top: 30px;
  padding: 30px;
`;

export const TodoForm = styled.div`
  margin: 15px 0 0 0;
  border-top: 1px solid var(--lightgrey);
  padding: 25px 0 0 0;

  form {
  display: flex;

    input[type=text] {
      padding: 10px 20px;
      border: 1px solid var(--grey);
      border-radius: 16px;
      outline: 0;
      margin: 0 10px 0 0;
      flex-grow: 3;
    }
  }
`;

export const TodoItem = styled.div`
  display: flex;
  vertical-align: middle;
  display: flex;
  align-items: center;

  input[type=checkbox] {
    margin: 0 10px 0 0;
  }

  input[type=text] {
    padding: 10px;
    height: auto;
    outline: 0;
    border: 1px solid transparent;
    border-radius: 16px;
    flex-grow: 3;

    &:focus {
      background-color: var(--palegrey);
    }
  }

  .show {
    display: inline-block !important;
  }

  .ribbon {
    cursor: pointer;
    border: 1px solid var(--lightgrey);
    padding: 3px 5px;
    border-radius: 50%;
    margin: 0 0 0 10px;
    display: none;

    &:hover {
      border: 1px solid var(--grey);
    }

    path {
      color: var(--grey);
    }
  }
`;