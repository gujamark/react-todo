import React, { useState, useEffect } from 'react';
import API_SERVICES from '../services/api';
export const TodoContext = React.createContext(null);

function TodoProviderComponent({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API_SERVICES.getTodoList(setData);
  }, []);

  const addNewTodo = (newTodo) => {
    const newList = [...data, newTodo];
    setData(newList);
    console.log(newList);
  };

  const onDone = (itemId, value) => {
    const itemIndex = data.findIndex((dataItem) => dataItem.id === itemId);
    const newList = [
      ...data.slice(0, itemIndex),
      {
        ...data[itemIndex],
        done: value,
      },
      ...data.slice(itemIndex + 1),
    ];
    setData(newList);
  };

  TodoContext.displayName = 'Todo Provider';

  return (
    <TodoContext.Provider value={{ addNewTodo, onDone, data, setData }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProviderComponent;
