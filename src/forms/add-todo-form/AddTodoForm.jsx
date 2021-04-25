import './AddTodo.css';
import { TodoContext } from '../../contexts/TodoProvier.js';
import { useState, useContext } from 'react';

function AddTodoForm({ onTodoAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { addNewTodo } = useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      name: name,
      description: description,
      id: Math.random(),
    };

    addNewTodo(newTodo);
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className="form-wrapper">
        <form className="todo-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="todo-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="todo-name"
              placeholder="Todo Name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={({ target }) => {
                setDescription(target.value);
              }}
              required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodoForm;
