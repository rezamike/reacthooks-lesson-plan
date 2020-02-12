import React, { useEffect } from 'react';
import listState from './global/listState.js';
import Form from './components/Form.js';
import List from './components/List.js';
import './App.css';

const App = () => {
  const { todos, handle_submit, delete_todo } = listState([]);

  useEffect(() => {
    document.title = `You have ${todos.length} task${todos.length > 1 || todos.length === 0 ? 's' : ''}!`;
  });

  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid navbar">
        <div className="container">
          <h1 className="display-4">Todo List</h1>
        </div>
      </div>
      <div className="main">
        <Form
          handle_submit={handle_submit}
        />
        {todos.map((todo, i) => (
          <List
            value={todo}
            key={i}
            id={i}
            delete_todo={delete_todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
