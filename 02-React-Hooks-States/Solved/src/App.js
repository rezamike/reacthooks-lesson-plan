import React, { useState } from 'react';
import Form from './components/Form.js';
import List from './components/List.js';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Todo List</h1>
        </div>
      </div>
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
  );
}

export default App;
