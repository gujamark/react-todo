import './TodoListItem.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TodoListItem({ item, onDone }) {
  const [done, setDone] = useState(item.done);

  return (
    <div className="todo-item-wrapper">
      <div className="todo-list-item">
        <details>
          <summary className={done ? 'done' : ''}>
            {item.name}
            {done ? <div className="todo-done-icon">Done</div> : ''}
          </summary>
          <p className="todo-description">{item.description}</p>
        </details>
      </div>
      <input
        type="checkbox"
        className="form-check-input todo-status-checkbox"
        defaultChecked={done}
        onChange={({ target }) => {
          setDone(target.checked);
          onDone(item.id, target.checked);
        }}
      />
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TodoListItem;
