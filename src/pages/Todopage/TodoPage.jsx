import './Todo.css';
import AddTodoForm from '../../forms/add-todo-form';
import TodoList from '../../todo/todo-list';

function TodoPage() {
  return (
    <>
      <AddTodoForm></AddTodoForm>
      <TodoList></TodoList>
    </>
  );
}

export default TodoPage;
