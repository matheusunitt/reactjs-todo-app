import React, { Component } from 'react';

import { Container, TodoForm, TodoItem } from './styles';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, goal: 'Estudar desenvolvimento web', status: false },
        { id: 2, goal: 'Estudar coreano', status: true },
        { id: 3, goal: 'Estudar norueguês', status: true },
        { id: 4, goal: 'Fazer workout', status: false },
        { id: 5, goal: 'Desenvolver o projeto da pós', status: true },
      ],
      newGoalText: ''
    }
  }

  handleTextInput = (e) => {
    this.setState({ newGoalText: e.target.value }, () => console.log(this.state.newGoalText));
  }

  handleCheckbox = (e) => {
    this.setState({ ...this.state, status: e.target.checked }, () => console.log(this.state.todos));
  }

  handleAddGoal = () => {
    const { newGoalText } = this.state;
    const id = this.state.todos.length + 1;
    const object = { id, goal: newGoalText, status: false }

    if (newGoalText !== '') {
      this.setState(prevState => ({
        todos: {
          ...prevState.todos, object
        }
      }), () => console.log(this.state.todos));
    } else {
      alert('O campo da meta não pode ficar vazio!');
    }
  }

  render() {
    const { todos, newGoalText } = this.state;

    return (
      <Container>
        <TodoForm>
          <input type="text" value={newGoalText} onChange={this.handleTextInput} placeholder="Título da meta" />
          <button onClick={this.handleAddGoal}>Adicionar</button>
        </TodoForm>

        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.status} onChange={this.handleCheckbox} />
              {todo.goal} <strong>{todo.status ? "- Feito" : []}</strong>
            </label>
          </TodoItem>
        ))}
      </Container>
    );
  }
}

export default Todos;