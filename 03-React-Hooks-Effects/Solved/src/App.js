import React, { useState, useEffect } from 'react';
import Form from './components/Form.js';
import List from './components/List.js';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `You have ${todos.length} task${todos.length > 1 || todos.length === 0 ? 's' : ''}!`;
  })

  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid navbar">
        <div className="container">
          <h1 className="display-4">Todo List</h1>
        </div>
      </div>
      <div className="main">
        <Form
          handle_submit={(input) => {
            const task = input.trim();

            if (task.length > 0) setTodos([...todos, task]);
          }}
        />
        {todos.map((todo, i) => (
          <List
            value={todo}
            key={i}
            id={i}
            delete_todo={(id) => {
              const todoArr = [...todos];
              todoArr.splice(id, 1);

              setTodos(todoArr);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
