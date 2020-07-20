import React, { Component } from 'react';

import { Container, TodoForm, TodoItem } from './styles';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { goal: 'Estudar desenvolvimento web', status: false },
        { goal: 'Estudar coreano', status: true },
        { goal: 'Estudar norueguês', status: true },
        { goal: 'Fazer workout', status: false },
        { goal: 'Desenvolver o projeto da pós', status: true },
      ],
      newGoalText: ''
    }
  }

  handleTextInput = (e) => this.setState({ newGoalText: e.target.value });

  handleCheckbox = (e) => {
    const { todos } = this.state;

    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
      ]
    }), () => console.log(todos));
  }

  handleAddGoal = (e) => {
    e.preventDefault();

    const { newGoalText } = this.state;
    const object = { goal: newGoalText, status: false }

    if (newGoalText !== '') {
      this.setState({
        todos: [...this.state.todos, object]
      });

      this.setState({ newGoalText: '' });
    } else {
      alert('O campo da meta não pode ficar vazio!');
    }
  }

  //TODO: Add functionality Edit
  handleEditGoal = (e) => alert('Funcionalidade não disponível na versão 1');

  //TODO: Add functionality Delete
  handleDeleteGoal = (e) => alert('Funcionalidade não disponível na versão 1');

  render() {
    const { todos, newGoalText } = this.state;

    return (
      <Container>
        <TodoForm>
          <form onSubmit={this.handleAddGoal}>
            <input
              type="text"
              value={newGoalText}
              onChange={this.handleTextInput}
              placeholder="Qual o título da sua meta?" />
            <button type="submit" onClick={this.handleAddGoal}>Adicionar</button>
          </form>
        </TodoForm>

        {/* FIXME: index approach */}
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <label>
              <input type="checkbox" defaultChecked={todo.status} onChange={this.handleCheckbox} />
              {todo.goal}
            </label>
            {/* TODO: Add buttons with images instead of links */}
            <a href="#" onClick={this.handleEditGoal}>editar</a>
            <a href="#" onClick={this.handleDeleteGoal}>remover</a>
          </TodoItem>
        )) || []}
      </Container>
    );
  }
}

export default Todos;