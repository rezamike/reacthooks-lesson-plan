import React, { Component } from 'react';
import Form from './components/Form.js';
import List from './components/List.js';
import './App.css';

class App extends Component {
  state = {
    todo: '',
    todos: []
  }

  handle_change = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  handle_submit = event => {
    event.preventDefault();

    const todoArr = this.state.todos;
    todoArr.push(this.state.todo);

    this.setState({
      todos: todoArr,
      todo: ''
    });
  };

  delete_todo = id => {
    const todoArr = this.state.todos;
    todoArr.splice(id, 1);

    this.setState({
      todos: todoArr
    })
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Todo List</h1>
          </div>
        </div>
        <Form
          onSubmit={this.handle_submit}
          onChange={this.handle_change}
          value={this.state.todo}
        />
        {this.state.todos.map((todo, i) => (
          <List
            id={i}
            key={i}
            ondelete={this.delete_todo}
            value={todo}
          />
        ))}
      </div>
    );
  }
}

export default App;
