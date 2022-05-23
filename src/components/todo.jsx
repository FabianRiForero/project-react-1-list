import { useState } from "react"

export default function Todo({ id, title, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    const FormEdit = () => {
        const [newValue, setNewValue] = useState(title);
        const handleSubmit = e => {
            e.preventDefault();
        }
        const handleChange = e => {
            const value = e.target.value;
            setNewValue(value);
        }
        const handleClickUpdateTodo = () => {
            onUpdate(id, newValue);
            setIsEdit(false);
        }
        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" value={newValue} onChange={handleChange} />
            <button className="button" onClick={handleClickUpdateTodo}>Update</button>
        </form>
    }

    const TodoElement = () => {
        return <div className="todoInfo">
            <span className="todoTitle">{title}</span>
            <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
            <button className="buttonDelete" onClick={e => onDelete(id)}>Delete</button>
        </div>
    }

    return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}