import { useState } from "react";
import Todo from "./todo";

import './todoApp.css';

export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([
        {id: crypto.randomUUID(), title: 'Item #1'},
        {id: crypto.randomUUID(), title: 'Item #2'},
    ]);

    const handleChange = e => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        };
        const temp = [...todos];
        temp.unshift(newTodo)
        setTodos(temp);
        setTitle('');
    }

    const handleUpdate = (id, value) => {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    const handleDelete = id => {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input className="todoInput" value={title} onChange={handleChange} />
                <input type="submit" value="Create todo" className="buttonCreate" onClick={handleSubmit} />
            </form>

            <div className="todosContainer">
                {todos.map(item => {
                    return <Todo {...item} key={item.id} onUpdate={handleUpdate} onDelete={handleDelete} />
                })}
            </div>
        </div>
    );
}