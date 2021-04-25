import TodoListItem from '../todo-list-item';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvier.js';

function TodoList() {
  const { data, onDone } = useContext(TodoContext);

  return (
    <div>
      {data.map((item) => {
        return <TodoListItem item={item} onDone={onDone} key={item.id} />;
      })}
    </div>
  );
}

TodoList.propTypes = {
  data: PropTypes.array,
};

export default TodoList;
