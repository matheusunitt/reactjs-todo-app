import React, { Component } from 'react';

import {
  Container,
  TodoList,
  TodoForm,
  TodoItem,
} from './styles';

import RemoveIcon from '@material-ui/icons/Delete';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          goals: [
            { title: 'Estudar desenvolvimento web', status: false },
            { title: 'Estudar coreano', status: true },
            { title: 'Estudar norueguês', status: true },
            { title: 'Fazer workout', status: false },
            { title: 'Desenvolver o projeto da pós', status: true }
          ],
        },
        {
          goals: [
            { title: 'Estudar desenvolvimento web', status: false },
            { title: 'Estudar coreano', status: false },
          ],
        }
      ],
      newGoalText: '',
      isHidden: false,
    }
  }

  handleAddTodo = () => {

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

  handleShowButton = () => {
    this.setState({ isHidden: true });
  }

  handleHideButton = () => {
    this.setState({ isHidden: false });
  }

  //TODO: Add functionality Delete
  handleDeleteGoal = (e) => alert('Funcionalidade não disponível na versão 1');

  render() {
    const { todos, newGoalText, isHidden } = this.state;

    return (
      <Container>
        <button className="btn" onClick={this.handleAddTodo}>Adicionar novo todo</button>

        {todos.map((todo, index) => (
          <TodoList key={index}>
            {/* FIXME: index approach */}
            {todo.goals.map((goal, index) => (
              <TodoItem key={index} onMouseEnter={this.handleShowButton} onMouseLeave={this.handleHideButton}>
                <input type="checkbox" defaultChecked={goal.status} onChange={this.handleCheckbox} />
                <input type="text" defaultValue={goal.title} />

                <div className={`ribbon ${isHidden ? 'show' : ''}`} onClick={this.handleDeleteGoal}>
                  <RemoveIcon />
                </div>
              </TodoItem>
            )) || []}

            <TodoForm>
              <form onSubmit={this.handleAddGoal}>
                <input
                  type="text"
                  value={newGoalText}
                  onChange={this.handleTextInput}
                  placeholder="Qual o título da sua meta?" />
                <button className="btn" type="submit" onClick={this.handleAddGoal}>Adicionar</button>
              </form>
            </TodoForm>
          </TodoList>
        )) || []}
      </Container>
    );
  }
}

export default Todos;