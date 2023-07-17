import React, { useState } from 'react';
import styles from './Todo.module.css';
import TodoItem from './TodoItem';
import Data from './Todos';
import TodoHead from './TodoHead';

function TodoList() {
  const [todos, setTodos] = useState(Data);

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, done: !todo.done };
        const updatedData = Data.map(data => {
          if (data.id === id) {
            return updatedTodo;
          }
          return data;
        });
        setTodos(updatedData);
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const getItemCount = () => {
    return todos.filter(todo => !todo.done).length;
  };

  return (
    <div className={styles.Container}>
      <div className={styles.ListContainer}>
        <TodoHead ItemCount={getItemCount()} />
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            done={todo.done}
            text={todo.text}
            onClick={() => handleTodoClick(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
