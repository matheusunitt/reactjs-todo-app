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
    this.setState({ newGoalText: e.target.value });
  }

  //FIXME: Change state is not working
  handleCheckbox = (e) => {
    this.setState();
  }

  handleAddGoal = (e) => {
    e.preventDefault();

    const { newGoalText } = this.state;

    //FIXME: TEMPORARY APPROACH - Deleting items will break the id existence
    const id = this.state.todos.length + 1;
    const object = { id, goal: newGoalText, status: false }

    if (newGoalText !== '') {
      this.setState({
        todos: [
          ...this.state.todos, object
        ]
      });

      this.setState({ newGoalText: '' });
    } else {
      alert('O campo da meta não pode ficar vazio!');
    }
  }

  //TODO: Add functionality Edit
  handleEditGoal = (e) => {
    alert('Funcionalidade não disponível na versão 1');
  }

  //TODO: Add functionality Delete
  handleDeleteGoal = (e) => {
    alert('Funcionalidade não disponível na versão 1');
  }

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

        {todos.map((todo) => (
          <TodoItem key={todo.id}>
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