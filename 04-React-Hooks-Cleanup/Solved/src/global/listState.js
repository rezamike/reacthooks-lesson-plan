import { useState } from 'react';

export default (value) => {
    const [todos, setTodos] = useState(value);

    return {
        todos,
        handle_submit: (input) => {
            const task = input.trim();

            if (task.length > 0) setTodos([...todos, task]);
        },
        delete_todo: (id) => {
            const todoArr = [...todos];
            todoArr.splice(id, 1);

            setTodos(todoArr);
        }
    };
};